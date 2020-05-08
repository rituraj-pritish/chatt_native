import styled from 'styled-components'
import { View } from 'react-native'
import { lighten } from 'polished'
import theme from 'app/theme'

export const Message = styled(View)`
  background-color: ${lighten(0.2, theme.primary)};
  align-self: ${({ alignRight }) => (alignRight ? 'flex-end' : 'flex-start')};
  border-radius: 15;
  padding-horizontal: 10;
  padding-top: 4;
  padding-bottom: 6;
  margin-vertical: 3;
  max-width: 80%;
`
