import React from 'react'
import { useRoute } from '@react-navigation/native'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { StyledStatusBar, StyledHeader } from './Header.styled'
import CustomText from '../ui/CustomText'

const Header = () => {
  StatusBar.setBarStyle('light-content', true)

  return (
    <>
      <StyledStatusBar />
      <StyledHeader>
        <CustomText color='white' size={22} bold>
          Chatt
        </CustomText>
      </StyledHeader>
    </>
  )
}

const styles = StyleSheet.create({})

export default Header
