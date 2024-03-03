import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import React from 'react';
import Gap from './Gap';

interface InputProps extends TextInputProps {
  label: string;
}

const Input = (props: InputProps) => {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <Gap height={6} />
      <TextInput
        style={styles.input}
        {...props}
        placeholderTextColor="#8D92A3"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    color: '#E2E2E2',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
  input: {
    padding: 12,
    borderRadius: 8,
    fontSize: 18,
    fontWeight: '700',
    borderWidth: 1,
    borderColor: '#F2F2F2',
    color: '#8D92A3',
  },
});
