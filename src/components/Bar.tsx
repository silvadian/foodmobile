import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';

const Bar = ({
  state,
  descriptors,
  navigation,
  position,
}: MaterialTopTabBarProps) => {
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
          <TouchableOpacity onPress={onPress} style={styles.itemWrapper}>
            <Text style={styles.label}>{label}</Text>
            <View
              style={[
                styles.itemLine,
                {
                  borderBottomWidth: isFocus ? 3 : 0,
                  borderBottomColor: '#E2E2E2',
                },
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Bar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    backgroundColor: '#3F3F3F',
  },
  itemWrapper: {
    paddingVertical: 16,
    position: 'relative',
    alignItems: 'center',
  },
  label: {
    color: '#E2E2E2',
  },
  itemLine: {
    position: 'absolute',
    width: 40,
    bottom: 0,
  },
});
