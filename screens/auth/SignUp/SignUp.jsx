import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import Input from 'components/ui/Input'
import theme from 'app/theme'
import Screen from 'components/ui/Screen'
import CustomButton from 'components/ui/CustomButton'
import CustomText from 'components/ui/CustomText'

const SignIn = ({ navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')

  return (
    <Screen mt={50}>
      <Text>Email</Text>
      <Input onChangeText={text => setEmail(text)} value={email} />

      <Text>Name</Text>
      <Input onChangeText={text => setName(text)} value={name} />

      <Text>Password</Text>
      <Input onChangeText={text => setPassword1(text)} value={password1} secureTextEntry />

      <Text>Confirm Password</Text>
      <Input onChangeText={text => setPassword2(text)} value={password2} secureTextEntry />

      <CustomButton title='Sign Up' color={theme.primary} />

      <CustomText textAlign='center'>or</CustomText>

      <CustomButton title='Sign Up with Google' color={theme.google} />
      <CustomText>
        <CustomText color='blue' onPress={() => navigation.navigate('signin')} >Sign In</CustomText>
        <CustomText> instead</CustomText>
      </CustomText>
    </Screen>
  )
}

export default SignIn
