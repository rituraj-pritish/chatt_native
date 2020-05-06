import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import { space } from 'styled-system'

export const StyledScreen = styled(View)`
  margin-horizontal: 10;

  ${space}
`

const Screen = ({ children, ...otherProps }) => {
  return (
    <StyledScreen {...otherProps}>{children}</StyledScreen>
  )
}

export default Screen
