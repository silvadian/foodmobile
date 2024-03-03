import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PastOrder from './PastOrder';
import InProgress from './InProgress';
import {Bar, Gap, Header} from '../../components';

const Tab = createMaterialTopTabNavigator();

const OrderScreen = () => {
  return (
    <View style={{backgroundColor: '#3F3F3F', flex : 1}}>
      <Header title="Your Orders" desc="Wait for the best meal" />
      <Gap height={24} backgroundColor="#4F4F4F" />
      <Tab.Navigator tabBar={props => <Bar {...props} />}>
        <Tab.Screen
          name="InProgress"
          component={InProgress}
          options={{title: 'In Progress'}}
        />
        <Tab.Screen
          name="PastOrder"
          component={PastOrder}
          options={{title: 'Past Order'}}
        />
      </Tab.Navigator>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
