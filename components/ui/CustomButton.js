import React from 'react'
import { StyleSheet, Button, View } from 'react-native'
import styled from 'styled-components'
import { space } from 'styled-system'

export const StyledButton = styled(View)`
  margin-vertical: 10;
  
  ${space}
`

const CustomButton = ({ title, ...props }) => {
  return (
    <StyledButton {...props} >
      <Button title={title} {...props} />
    </StyledButton>
  )
}

export default CustomButton
