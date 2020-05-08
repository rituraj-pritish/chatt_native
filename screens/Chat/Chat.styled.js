import styled from 'styled-components'
import { View, TouchableOpacity } from 'react-native'
import Screen from 'components/ui/Screen'
import theme from 'app/theme'
import { lighten } from 'polished'

export const InputBtn = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 3;
`

export const SendBtn = styled(TouchableOpacity)`
  border-radius: 100;
  height: 50;
  width: 50;
  justify-content: center;
  align-items: center;
  background-color: ${({ disabled }) =>
    disabled ? lighten(0.2, theme.primary) : theme.primary};
  margin-left: 5;
`

export const ChatWrapper = styled(Screen)`
  background-color: ${lighten(0.1, theme.primary)};
`
