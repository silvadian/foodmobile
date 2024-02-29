import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {dummyImage1} from '../assets';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrap}>
        <Text style={styles.title}>FoodMarket</Text>
        <Text style={styles.desc}>Let’s get some foods</Text>
      </View>
      <Image source={dummyImage1} style={styles.image} />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 52 : 4,
    minHeight: 108,
    backgroundColor: '#3F3F3F',
    flexDirection: 'row',
    alignItems : "center",
    paddingHorizontal : 24
  },
  textWrap: {
    flex : 1
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: '#E2E2E2',
  },
  desc: {
    fontSize: 14,
    fontWeight: '300',
    color: '#8D92A3',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});
