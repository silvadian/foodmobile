import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { Button, Container, Gap, Header, Input } from '../../components'
import { SignUpAddressProps } from '../../utils'

const SignUpAddress = ({navigation} : SignUpAddressProps) => {

  const handleSubmit = useCallback(
    () => {
        navigation.navigate("HomeScreen")
    },
    [],
  )
  
  return (
    <Container style={styles.container}>
      <Header title='Address' desc='Make sure it`s valid'/>
      <Gap height={24} backgroundColor='#4F4F4F'/>
      <View style ={styles.form}>
      <Input label='Phone number' placeholder='Type your phone number'/>
      <Gap height={16}/>
      <Input label='Address' placeholder='Type your address'/>
      <Input label='House Number' placeholder='Type your house number'/>
      <Gap height={16}/>
      <Input label='City' placeholder='Type your city'/>
      <Gap height={24}/>
      <Button label='Sign Up Now' onPress={handleSubmit}/>
      <Gap height={12}/>
      </View>
    </Container>
  )
}

export default SignUpAddress

const styles = StyleSheet.create({
  container : {

  },
  form :{
    paddingHorizontal : 24
  }
})