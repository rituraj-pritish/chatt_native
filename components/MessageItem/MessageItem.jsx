import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomText from 'components/ui/CustomText'

const MessageItem = ({ message, author, date, currentUser, sendMessage }) => {
  return (
    <View>
      <CustomText textAlign={author === currentUser ? 'right' : 'left'}>
        {message}
      </CustomText>
    </View>
  )
}

const styles = StyleSheet.create({})

export default MessageItem
