import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {dummyImage1} from '../../assets';
import {Gap} from '../../components';

const ProductCard = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={dummyImage1} style={styles.image} />
      <Gap width={12} />
      <View style={{flex: 1}}>
        <Text style={styles.title}>Cherry Healthy</Text>
        <Text>IDR 12.289.000</Text>
      </View>
      <Text>14 item</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },

  title: {
    color: '#E2E2E2',
    fontSize: 16,
    fontWeight: '400',
  },
  price: {
    color: '#8D92A3',
    fontSize: 13,
    fontWeight: '400',
  },
});
