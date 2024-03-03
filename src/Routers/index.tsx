import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  FoodDetails,
  HomeScreen,
  OrderScreen,
  ProfileScreen,
  SignIn,
  SignUp,
  SignUpAddress,
  SplashScreen,
} from '../screen';
import {RootStackParams} from '../utils';
import Menu from './Menu';

const Stack = createNativeStackNavigator<RootStackParams>();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}
      tabBar={props => <Menu {...props} />}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{title: 'Order'}}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
    </Tab.Navigator>
  );
};

const Routers = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainApp" component={MainApp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignUpAddress" component={SignUpAddress} />
        <Stack.Screen name="FoodDetails" component={FoodDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routers;
