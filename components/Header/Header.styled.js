import styled from 'styled-components'
import { View, StatusBar } from 'react-native'
import theme from 'app/theme'

export const StyledStatusBar = styled(View)`
  height: ${StatusBar.currentHeight};
  background-color: ${theme.statusBar};
`

export const StyledHeader = styled(View)`
  background-color: ${theme.primary};
  height: 70;
  justify-content: center;
  padding-horizontal: 5;
`
