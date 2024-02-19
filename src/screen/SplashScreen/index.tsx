import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { ILLogo } from '../../assets'
import { CommonActions } from '@react-navigation/native'
import { SplashScreenProps } from '../../utils'


const SplashScreen = ({ navigation } : SplashScreenProps) => {

  useEffect(() => {

    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'SignIn' }]
        }),
      )
    }, 3000)
  }, [navigation])

  return (
    <View style={styles.container}>
      <ILLogo></ILLogo>
      <Text style={styles.text}>FoodMarket</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFC700",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "500",
    lineHeight: 48,
    color: "#020202",
  }

})