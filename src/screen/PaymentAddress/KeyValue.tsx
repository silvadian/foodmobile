import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface KeyValueProps {
  title: string;
  value: string;
  isGreen?: boolean;
}

const KeyValue = ({title, value, isGreen}: KeyValueProps) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <Text
        style={[
          styles.value,
          isGreen ? {color: '#1ABC9C'} : {color: '#E2E2E2'},
        ]}>
        {value}
      </Text>
    </View>
  );
};

export default KeyValue;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 3,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: '#8D92A3',
  },
  value: {
    fontSize: 14,
    fontWeight: '400',
  },
});
