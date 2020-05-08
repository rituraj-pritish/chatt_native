import React, { useEffect } from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { signOut } from 'app/redux/auth'
import HeaderButton from 'components/HeaderButton'
import SignIn from 'app/screens/auth/SignIn'
import SignUp from 'app/screens/auth/SignUp'
import Users from 'app/screens/Users'
import Chat from 'app/screens/Chat'
import { connect } from 'react-redux'
import { authStateChangeHandler } from 'app/redux/auth'
import { backgroundColor } from 'styled-system'
import theme from 'app/theme'

const Stack = createStackNavigator()

const AppNavigation = ({ isAuthenticated, user, signOut }) => {
  return (
    <Stack.Navigator
      initialRouteName='signin'
      screenOptions={{
        headerTintColor: 'white',
        headerTitle: 'Chatt',
        headerStyle: {
          backgroundColor: theme.primary
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      {isAuthenticated ? (
        <>
          <Stack.Screen
            name='users'
            component={Users}
            options={props => ({
              headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                  <Item
                    title='Logout'
                    iconName='md-log-out'
                    iconSize={30}
                    onPress={signOut}
                  />
                </HeaderButtons>
              )
            })}
          />
          <Stack.Screen name='chat' component={Chat} />
        </>
      ) : (
        <>
          <Stack.Screen name='signin' component={SignIn} />
          <Stack.Screen name='signup' component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuth,
  user: state.auth.user
})

export default connect(mapStateToProps, { authStateChangeHandler, signOut })(
  AppNavigation
)
