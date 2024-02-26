import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ICArrowLeft } from '../assets'
import { useNavigation } from '@react-navigation/native'

interface Headerprops {
  title: string,
  desc: string,
  noBack? : boolean
}

const Header = ({ title, desc, noBack }: Headerprops) => {

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {noBack? null :(
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <ICArrowLeft fill='#E2E2E2'/>
      </TouchableOpacity>
        )}
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 112,
    gap : 16,
    marginTop : Platform.OS === "ios" ? 32 : 0
  },
  body: {
    flex: 1,
    justifyContent: "space-between"
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#E2E2E2'
  },
  desc: {
    fontSize: 12,
    fontWeight: '300',
    color: '#8D92A3'
  }
})
