import React, { useEffect, useState, useRef } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  KeyboardAvoidingView
} from 'react-native'
import Screen from 'components/ui/Screen'
import MessageItem from 'components/MessageItem'
import Input from 'components/ui/Input'
import { InputBtn } from './Chat.styled'

const Chat = ({ getChat, messages, loading, route, sendMessage }) => {
  const [text, setText] = useState('')
  const flatListRef = useRef()
  const { receiverId } = route.params

  useEffect(() => {
    getChat(receiverId)
  }, [])

  const renderMessages = ({ item }) => (
    <MessageItem {...item} receiverId={receiverId} />
  )

  const handleSend = () => {
    sendMessage(receiverId, text)
    setText('')
  }

  return (
    <Screen style={{ flex: 1 }}>
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
            width='80%'
          />
          <Button title='Send' onPress={handleSend} disabled={!text} />
        </InputBtn>
      </KeyboardAvoidingView>
    </Screen>
  )
}

export default Chat
