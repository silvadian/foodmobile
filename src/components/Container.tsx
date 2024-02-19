import { StyleProp, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'

interface ContainerProps{
    children : ReactNode,
    style? : StyleProp<ViewStyle>
}

const Container = ({children, style} : ContainerProps )=> {
  
  const ContainerStyle = {
    backgroundColor : '#3F3F3F',
    flex : 1
  }
    return<View style={[ContainerStyle, style]}>{children}</View>
}

export default Container