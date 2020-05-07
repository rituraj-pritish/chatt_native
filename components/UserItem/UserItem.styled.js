import styled from 'styled-components'
import { View, ImageBackground } from 'react-native'

export const ItemWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
`

export const Avatar = styled(ImageBackground).attrs({
  imageStyle: { borderRadius: 100 }
})`
  height: 80;
  width: 80;
  margin-vertical: 10;
  margin-right: 20;
`
export const Online = styled(View)`
  height: 15;
  width: 15;
  border-radius: 100;
  background: green;
  position: absolute;
  right: 5;
  top: 3;
`
