import styled from 'styled-components'
import { View, Image } from 'react-native'

export const HeaderWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
`

export const Avatar = styled(Image)`
  height: 50;
  width: 50;
  border-radius: 100;
  margin-right: 10;
  margin-left: -20;
`
