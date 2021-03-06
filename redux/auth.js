import { firebase, db } from 'app/firebase'

const AUTH_REQUEST = 'AUTH_REQUEST'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const AUTH_FAILURE = 'AUTH_FAILURE'

const AUTH_STATE_REQUEST = 'AUTH_STATE_REQUEST'
const AUTH_STATE_SUCCESS = 'AUTH_STATE_SUCCESS'
const AUTH_STATE_FAILURE = 'AUTH_STATE_FAILURE'

const SIGNOUT = 'SIGNOUT'

export const signUp = ({ name, email, password }) => async dispatch => {
  const DEFAULT_IMAGE_URL =
    'https://firebasestorage.googleapis.com/v0/b/chat-c063c.appspot.com/o/assets%2Fuser.png?alt=media&token=a6fa6d73-3ac4-4e89-ad36-55904f4de284'

  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)

    if (res.user) {
      db.collection('users').doc(res.user.uid).set({
        displayName: name,
        photoURL: DEFAULT_IMAGE_URL,
        email,
        uid: res.user.uid,
        online: true
      })
    }

    dispatch({
      type: AUTH_SUCCESS,
      payload: {
        displayName: name,
        email,
        photoURL: DEFAULT_IMAGE_URL,
        uid: res.user.id
      }
    })
  } catch (err) {
    dispatch({ type: AUTH_FAILURE })
  }
}

export const signIn = ({ email, password }) => async dispatch => {
  dispatch({ type: AUTH_REQUEST })
  try {
    const res = await firebase
      .auth()

      .signInWithEmailAndPassword(email, password)

    if (res.user) {
      db.collection('users').doc(res.user.uid).update({
        online: true
      })
    }
  } catch (err) {
    dispatch({ type: AUTH_FAILURE })
    console.log(err)
  }
}

export const authWithGoogle = () => async dispatch => {
  const provider = new firebase.auth.GoogleAuthProvider()
  try {
    const res = await firebase.auth().signInWithPopup(provider)

    if (res.user) {
      db.collection('users').doc(res.user.uid).set({
        displayName: res.user.displayName,
        photoURL: res.user.photoURL,
        email: res.user.email,
        uid: res.user.uid,
        online: true
      })
    }
  } catch (err) {
    dispatch({ type: AUTH_FAILURE })
  }
}

export const signOut = () => async (dispatch, getState) => {
  const auth = getState().auth
  try {
    await db.collection('users').doc(auth.user.uid).update({
      online: false
    })
    firebase.auth().signOut()
    dispatch({ type: SIGNOUT })
  } catch (err) {
    console.log(err)
  }
}

export const authStateChangeHandler = () => async dispatch => {
  dispatch({ type: AUTH_STATE_REQUEST })
  firebase.auth().onAuthStateChanged(async user => {
    if (user) {
      await db.collection('users').doc(user.uid).update({
        online: true
      })

      const res = await db.collection('users').doc(user.uid).get()

      const { displayName, email, photoURL, uid } = res.data()

      dispatch({
        type: AUTH_STATE_SUCCESS,
        payload: {
          displayName,
          email,
          photoURL,
          uid
        }
      })
    } else {
      dispatch({ type: AUTH_STATE_FAILURE })
    }
  })
}

const initialState = {
  loading: false,
  isAuth: false,
  error: null,
  user: null,
  stateLoading: false
}

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_REQUEST:
      return {
        ...state,
        loading: true,
        isAuth: false,
        error: null,
        user: null
      }
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        error: null,
        user: payload
      }
    case AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        isAuth: false,
        error: payload,
        user: null
      }
    case AUTH_STATE_REQUEST: {
      return {
        ...state,
        stateLoading: true
      }
    }
    case AUTH_STATE_SUCCESS: {
      return {
        ...state,
        stateLoading: false,
        isAuth: true,
        user: payload,
        error: null,
        loading: false
      }
    }
    case AUTH_STATE_FAILURE: {
      return {
        ...state,
        isAuth: false,
        stateLoading: false,
        loading: false,
        user: null,
        error: payload
      }
    }
    case SIGNOUT:
      return {
        ...state,
        loading: false,
        isAuth: false,
        error: null,
        user: null
      }
    default:
      return state
  }
}
