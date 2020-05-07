import React, { useEffect } from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'

import SignIn from 'app/screens/auth/SignIn'
import SignUp from 'app/screens/auth/SignUp'
import Users from 'app/screens/Users'
import Chat from 'app/screens/Chat'
import { connect } from 'react-redux'
import { authStateChangeHandler } from 'app/redux/auth'

const Stack = createStackNavigator()

const AppNavigation = ({ isAuthenticated, user }) => {
  return (
    <Stack.Navigator
      initialRouteName='signin'
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      {isAuthenticated ? (
        <>
          <Stack.Screen name='users' component={Users} />
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

export default connect(mapStateToProps, { authStateChangeHandler })(
  AppNavigation
)
