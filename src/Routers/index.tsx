import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen, SignIn, SignUp, SignUpAddress, SplashScreen } from '../screen';
import { RootStackParams } from '../utils';
const Stack = createNativeStackNavigator<RootStackParams>()


const Routers = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="SignUpAddress" component={SignUpAddress}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routers;