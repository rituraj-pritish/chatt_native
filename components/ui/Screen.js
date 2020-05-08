import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import { space, flex, grid, flexbox, color } from 'styled-system'

export const StyledScreen = styled(View)`
  padding-horizontal: 10;

  ${space} ${flexbox} ${grid} ${color}
`

const Screen = ({ children, ...otherProps }) => {
  return <StyledScreen {...otherProps}>{children}</StyledScreen>
}

export default Screen
