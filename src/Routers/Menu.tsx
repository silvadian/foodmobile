import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import MenuItem from './MenuItem';

interface MenuProps extends BottomTabBarProps {}

const Menu = ({state, descriptors, navigation}: MenuProps) => {
  console.log({state: state.routes});
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = (
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name
        ) as string;

        const isFocus = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          navigation.navigate(route.name);
        };

        return (
          <MenuItem
            title={label}
            key={index}
            active={isFocus}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F3F3F',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
});
