import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface InputAvatarProps{
    onPress : () => void;
    uri? : string
}

const InputAvatar = ({onPress, uri}: InputAvatarProps) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.wrapper} onPress={onPress}>
            {uri? (
                <Image source={{uri}} style={styles.circle}/>
            ):(
                <View style={styles.circle}>
                <Text style={styles.text}>Add</Text>
                <Text style={styles.text}>Photo</Text>
            </View>
            )}

        </TouchableOpacity>
    </View>
  )
}

export default InputAvatar

const styles = StyleSheet.create({
    container : {
        alignItems : 'center'
    },
    wrapper:{
        height : 120,
        width : 120,
        borderRadius : 120,
        borderStyle : 'dashed',
        borderWidth : 1,
        borderColor : '#8D92A3',
        justifyContent : 'center',
        alignItems : 'center'
    },
    circle : {
        backgroundColor : '#4F4F4F',
        width : 90,
        height : 90,
        borderRadius : 90,
        justifyContent : 'center',
        alignItems : 'center'
    },
    text : {
        fontSize : 14,
        fontWeight : '400',
        lineHeight : 21,
        color : '#E2E2E2'
    }
})