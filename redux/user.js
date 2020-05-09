import { db, firebase } from 'app/firebase'
import newUid from 'app/helpers/newUid'

const SET_LOADING = 'SET_LOADING'
const SET_CHAT_MESSAGES = 'SET_CHAT_MESSAGES'
const CLEAR_CHAT_MESSAGES = 'CLEAR_CHAT_MESSAGES'
const SET_USERS = 'SET_USERS'

const chatId = (sender, reciever) => {
  return sender < reciever ? sender + reciever : reciever + sender
}

export const getUsers = () => async dispatch => {
  try {
    await db.collection('users').onSnapshot(data => {
      const users = data.docs.map(doc => doc.data())

      dispatch({ type: SET_USERS, payload: users })
    })
  } catch (err) {
    console.log(err)
  }
}

export const getChat = reciever => async (dispatch, getState) => {
  dispatch({ type: SET_LOADING, payload: true })
  const currentUser = getState().auth.user.uid
  try {
    await db
      .collection('chats')
      .doc(chatId(currentUser, reciever))
      .collection('messages')
      .orderBy('date')
      .onSnapshot(snap => {
        const messages = snap.docs.map(doc => doc.data())

        dispatch({ type: SET_CHAT_MESSAGES, payload: messages })
      })
  } catch (err) {
    console.log(err)
  }
}

export const clearChat = () => ({ type: CLEAR_CHAT_MESSAGES })

export const sendMessage = (reciever, message) => async (
  dispatch,
  getState
) => {
  const currentUser = getState().auth.user.uid
  const id = chatId(currentUser, reciever)
  const messagesRef = db.collection('chats').doc(id).collection('messages')

  try {
    const res = await messagesRef.add({
      message,
      author: currentUser,
      date: Date.now(),
      uid: newUid()
    })

    if (res.id) await messagesRef.doc(res.id).update({ uid: res.id })
  } catch (err) {
    console.log(err)
  }
}

export const sendFiles = (reciever, files) => {
  const storageRef = storage.ref('files')

  files.map(async file => {
    const id = uuid()

    try {
      await storageRef
        .child(id)
        .put(file)
        .then(() => {
          storageRef
            .child(id)
            .getDownloadURL()
            .then(url => {
              if (file.type.split('/')[0] === 'image') {
                sendMessage(reciever, {
                  type: 'image',
                  fileName: file.name,
                  url
                })
              } else {
                sendMessage(reciever, {
                  type: 'document',
                  fileName: file.name,
                  url
                })
              }
            })
        })

      // .on('state_changed', (snap) => {
      //   const progress = (snap.bytesTransferred / snap.totalBytes) * 100;

      //   dispatch({ type: SET_FILES_UPLOAD_PROGRESS, payload: progress });

      //   if (progress === 100) {
      //     storageRef
      //       .child(id)
      //       .getDownloadURL()
      //       .then((url) => {
      //         if (file.type.split('/')[0] === 'image') {
      //           sendMessage(reciever, {
      //             type: 'image',
      //             fileName: file.name,
      //             url,
      //           });
      //         } else {
      //           sendMessage(reciever, {
      //             type: 'document',
      //             fileName: file.name,
      //             url,
      //           });
      //         }
      //       });
      //   }
      // });
    } catch (err) {
      console.log(err)
    }
  })
}

// Reducer

const initialState = {
  users: [],
  filesUploadProgress: null,
  loading: true,
  chatMessages: []
}

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case SET_USERS:
      return {
        ...state,
        users: payload,
        loading: false
      }
    case SET_CHAT_MESSAGES:
      return {
        ...state,
        chatMessages: payload,
        loading: false
      }
    case CLEAR_CHAT_MESSAGES:
      return {
        ...state,
        chatMessages: [],
        loading: false
      }
    default:
      return state
  }
}
