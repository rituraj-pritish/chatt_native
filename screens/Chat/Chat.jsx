import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  KeyboardAvoidingView,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import MessageItem from 'components/MessageItem'
import Input from 'components/ui/Input'
import { InputBtn, ChatWrapper, SendBtn } from './Chat.styled'
import ChatHeader from '../../components/ChatHeader/ChatHeader'
import theme from 'app/theme'
import Screen from 'components/ui/Screen'
import Ionicons from '@expo/vector-icons/Ionicons'

const Chat = ({
  navigation,
  getChat,
  messages,
  loading,
  route,
  sendMessage,
  clearChat
}) => {
  const [text, setText] = useState('')
  const flatListRef = useRef()
  const { receiverId, name, photoURL } = route.params

  useEffect(() => {
    getChat(receiverId)

    return () => {
      clearChat()
    }
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: props => <ChatHeader name={name} photoURL={photoURL} />
    })
  }, [])

  const renderMessages = ({ item }) => (
    <MessageItem {...item} receiverId={receiverId} />
  )

  const handleSend = () => {
    sendMessage(receiverId, text)
    setText('')
  }

  if (loading || !messages.length)
    return (
      <ChatWrapper
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {loading ? (
          <ActivityIndicator size={40} color={theme.primary} />
        ) : (
          <>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text>Send message to start conversation</Text>
            </View>
            <InputBtn>
              <Input
                value={text}
                onChangeText={newText => setText(newText)}
                borderRadius={20}
                onSubmitEditing={handleSend}
                returnKeyType='send'
                flex={1}
              />
              <SendBtn onPress={handleSend} disabled={!text}>
                <Ionicons name='md-send' size={28} color='white' />
              </SendBtn>
            </InputBtn>
          </>
        )}
      </ChatWrapper>
    )

  return (
    <ChatWrapper flex={1}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <FlatList
          data={messages}
          keyExtractor={msg => msg.uid}
          renderItem={renderMessages}
          ref={flatListRef}
          onContentSizeChange={() =>
            flatListRef.current.scrollToEnd({ animated: true })
          }
          onLayout={() => flatListRef.current.scrollToEnd({ animated: true })}
        />
        <InputBtn>
          <Input
            value={text}
            onChangeText={newText => setText(newText)}
            borderRadius={20}
            flex={1}
          />
          <SendBtn onPress={handleSend} disabled={!text}>
            <Ionicons name='md-send' size={28} color='white' />
          </SendBtn>
        </InputBtn>
      </KeyboardAvoidingView>
    </ChatWrapper>
  )
}

export default Chat
