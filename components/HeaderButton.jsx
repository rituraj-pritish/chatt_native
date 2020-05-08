import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'

import theme from 'app/theme'
import { Platform } from 'react-native'

const CustomHeaderButtons = props => {
  return (
    <HeaderButton
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : theme.primary}
      {...props}
    />
  )
}

export default CustomHeaderButtons