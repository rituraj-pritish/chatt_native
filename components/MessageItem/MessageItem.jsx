import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomText from 'components/ui/CustomText'
import { Message } from './MessageItem.styled'

const MessageItem = ({ message, author, date, currentUser, sendMessage }) => {
  return (
    <View>
      <Message alignRight={author === currentUser}>
        <CustomText>{message}</CustomText>
      </Message>
    </View>
  )
}

const styles = StyleSheet.create({})

export default MessageItem
