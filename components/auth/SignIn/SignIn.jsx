import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import Input from '../../ui/Input'
import theme from 'app/theme'
import Screen from 'components/ui/Screen'
import CustomButton from 'components/ui/CustomButton'
import CustomText from 'components/ui/CustomText'

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('jd@gmail.com')
  const [password, setPassword] = useState('123456')

  return (
    <Screen mt={50}>
      <Text>Email</Text>
      <Input onChangeText={text => setEmail(text)} value={email} />

      <Text>Password</Text>
      <Input onChangeText={text => setPassword(text)} value={password} secureTextEntry />

      <CustomButton title='Sign In' color={theme.primary} />

      <CustomText textAlign='center'>or</CustomText>

      <CustomButton title='Sign In with Google' color={theme.google} />
      <CustomText>
        <CustomText color='blue' onPress={() => navigation.navigate('signup')} >Sign Up</CustomText>
        <CustomText> instead</CustomText>
      </CustomText>
    </Screen>
  )
}

export default SignIn
