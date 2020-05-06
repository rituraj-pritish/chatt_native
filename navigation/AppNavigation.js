import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import SignIn from 'components/auth/SignIn'
import SignUp from 'components/auth/SignUp'

const Stack = createStackNavigator()

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen name='signin' component={SignIn} />
      <Stack.Screen name='signup' component={SignUp} />
    </Stack.Navigator>
  )
}

export default AppNavigation
