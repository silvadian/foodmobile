import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'

interface ButtonProps extends TouchableOpacityProps{
    label : string;
    variant? : 'Primary' | 'Secondary';
}

const Button = (props: ButtonProps) => {

    const ContainerStyle ={
        backgroundColor : props.variant === "Secondary" ? '#E2E2E2' : '#FFC700'
    }
  return (
    <TouchableOpacity{...props} style={[styles.container, ContainerStyle]}>
      <Text>{props.label}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container :{
        paddingVertical : 12,
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 9
    },
    label :{
        fontSize : 14,
        fontWeight : '500',
        lineHeight : 21
    }
})