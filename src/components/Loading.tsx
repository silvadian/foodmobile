import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppSelector} from '../redux';

const Loading = () => {
  const {loading} = useAppSelector(state => state.loading);

  if (!loading) return <View />;

  return (
    <View style={styles.container}>
      <Text style={{color : "#cacaca"}}>Loading...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
