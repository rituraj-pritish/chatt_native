import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components'
import { StatusBar, View } from 'react-native';
import styled from 'styled-components'
import AppNavigation from 'app/navigation/AppNavigation'

import Header from 'app/components/Header';
import theme from 'app/theme'
import { NavigationContainer } from '@react-navigation/native';

export const AppContainer = styled(View)`
  flex: 1;
`

export default function App () {
  return (
    <ThemeProvider theme={theme} >
      <AppContainer>
        <Header />
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </AppContainer>
    </ThemeProvider>
  )
}