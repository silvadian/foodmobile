import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../components';
import {moneyFormat} from '../../utils';

interface ProductCardProps {
  title: string;
  price: number;
  amount: number;
  image: ImageSourcePropType;
}

const ProductCard = ({title, price, image, amount}: ProductCardProps) => {
  return (
    <View style={styles.wrapper}>
      <Image source={image} style={styles.image} />
      <Gap width={12} />
      <View style={{flex: 1}}>
        <Text style={styles.title}>{title}</Text>
        <Text>{moneyFormat(price)}</Text>
      </View>
      <Text>{amount} item</Text>
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
