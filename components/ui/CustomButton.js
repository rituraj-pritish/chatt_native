import React from 'react'
import { StyleSheet, Button, View, ActivityIndicator } from 'react-native'
import styled from 'styled-components'
import { space } from 'styled-system'

export const StyledButton = styled(View)`
  margin-vertical: 10;

  ${space}
`

const CustomButton = ({ title, loading, ...props }) => {
  return (
    <StyledButton {...props}>
      {loading ? <ActivityIndicator /> : <Button title={title} {...props} />}
    </StyledButton>
  )
}

export default CustomButton
