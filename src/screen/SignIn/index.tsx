import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { Button, Container, Gap, Header, Input } from '../../components'
import { SignInProps } from '../../utils'

const SignIn = ({navigation} : SignInProps) => {
  const createNewAccount = useCallback(
    () => {
      navigation.navigate("SignUp")
    },
    [],
  )
  const onSigInPress = useCallback(
    () => {
     navigation.navigate("MainApp")
    },
    [],
  )
  
  
  return (
    <Container style={styles.container}>
      <Header noBack title='SignIn' desc='Find your best ever meal'/>
      <Gap height={24} backgroundColor='#4F4F4F'/>
      <View style={styles.form}>
      <Input label='Email Address' placeholder='Type your email address'/>
      <Gap height={16}/>
      <Input label='Password' placeholder='Type your password'/>
      <Gap height={24}/>
      <Button label='SignIn' onPress={onSigInPress}/>
      <Gap height={12}/>
      <Button label='Create New Account' variant='Secondary' onPress={createNewAccount}/>
      <Gap height={12}/>
      </View>
    </Container>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container : {
  
  },
  form :{
    paddingHorizontal : 24
  }
})