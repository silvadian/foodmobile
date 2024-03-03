import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import NewTaste from './NewTaste';
import Popular from './Popular';
import Recommended from './Recommended';
import { Bar } from '../../components';

const Tab = createMaterialTopTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator tabBar={props => <Bar {...props} />}>
      <Tab.Screen
        name="NewTaste"
        component={NewTaste}
        options={{title: 'New Taste'}}
      />
      <Tab.Screen name="Popular" component={Popular} />
      <Tab.Screen name="Recommended" component={Recommended} />
    </Tab.Navigator>
  );
};

export default HomeTab;

const styles = StyleSheet.create({});
