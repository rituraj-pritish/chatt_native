import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { HeaderWrapper, Avatar } from './ChatHeader.styled'
import CustomText from 'components/ui/CustomText'

const ChatHeader = ({ name, photoURL }) => {
  return (
    <HeaderWrapper>
      <Avatar source={{ uri: photoURL }} />
      <CustomText color='white'>{name}</CustomText>
    </HeaderWrapper>
  )
}

export default ChatHeader
