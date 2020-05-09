import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator
} from 'react-native'
import Input from 'components/ui/Input'
import theme from 'app/theme'
import Screen from 'components/ui/Screen'
import CustomButton from 'components/ui/CustomButton'
import CustomText from 'components/ui/CustomText'
import { authWithGoogle, authStateChangeHandler } from '../../../redux/auth'

const SignIn = ({
  navigation,
  signIn,
  loading,
  authStateChangeHandler,
  appLoading
}) => {
  const [email, setEmail] = useState('jd@gmail.com')
  const [password, setPassword] = useState('123123')

  const handleSignIn = () => {
    signIn({ email, password })
  }

  useEffect(() => {
    authStateChangeHandler()
  }, [])

  if (appLoading) {
    return (
      <Screen flex={1} justifyContent='center' alignItems='center'>
        <ActivityIndicator size={50} color={theme.primary} />
      </Screen>
    )
  }

  return (
    <Screen mt={50}>
      <Text>Email</Text>
      <Input onChangeText={text => setEmail(text)} value={email} />

      <Text>Password</Text>
      <Input
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <CustomButton
        title='Sign In'
        color={theme.primary}
        onPress={handleSignIn}
        loading={loading}
      />

      {/* <CustomText textAlign='center'>or</CustomText>

      <CustomButton
        title='Sign In with Google'
        color={theme.google}
        onPress={() => authWithGoogle()}
      /> */}
      <CustomText>
        <CustomText color='blue' onPress={() => navigation.navigate('signup')}>
          Sign Up
        </CustomText>
        <CustomText> instead</CustomText>
      </CustomText>
    </Screen>
  )
}

export default SignIn
