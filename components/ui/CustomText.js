import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styled from 'styled-components'
import { space, typography, color } from 'styled-system'

export const StyledText = styled(Text)`
  color: ${({ color }) => color || 'black'};
  font-size: ${({ size }) => size || 14};
  ${({ bold }) => bold && `font-weight: bold`};

  ${space} ${typography} ${color}
`

const CustomText = ({ children, ...otherProps }) => {
  return (
    <StyledText {...otherProps} >{children}</StyledText>
  )
}

const styles = StyleSheet.create({})

export default CustomText
