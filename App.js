import 'react-native-gesture-handler'

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { View, StatusBar } from 'react-native'
import styled from 'styled-components'
import AppNavigation from 'app/navigation/AppNavigation'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from 'app/redux'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import Header from 'app/components/Header'
import theme from 'app/theme'
import { NavigationContainer } from '@react-navigation/native'

export const AppContainer = styled(View)`
  flex: 1;
  margin-top: ${({ height }) => height};
`

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
)

const App = () => {
  StatusBar.setBackgroundColor(theme.statusBar)
  StatusBar.setBarStyle('light-content')
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppContainer height={StatusBar.currentHeight}>
          <NavigationContainer>
            {/* <Header /> */}
            <AppNavigation />
          </NavigationContainer>
        </AppContainer>
      </Provider>
    </ThemeProvider>
  )
}

export default App
