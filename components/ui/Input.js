import React from 'react'
import { View,Text,StyleSheet, TextInput } from 'react-native'
import styled from 'styled-components'

export const StyledInput  = styled(TextInput)`
  background-color: #eee;
  padding-vertical: 10;
  padding-horizontal: 5;
  margin-vertical: 5;
  border-radius: 5;
  width: 100%;
`

const Input = (props) => {
  return (
    <StyledInput {...props} />
  )
}

export default Input
