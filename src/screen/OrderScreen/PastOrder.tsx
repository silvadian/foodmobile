import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FoodCard} from '../../components';
import {dummyImage1, dummyImage2, dummyImage3} from '../../assets';

const data = [
  {title: 'Nasi Bakar', image: dummyImage1, price: 10000},
  {title: 'Nasi Kuning', image: dummyImage2, price: 15000},
  {title: 'Nasi Padang', image: dummyImage3, price: 25000},
];

const PastOrder = () => {
  return (
    <ScrollView style={{backgroundColor: '#3F3F3F'}}>
      {data.map(item => (
        <FoodCard
          key={item.title}
          variant="landscape"
          star={1}
          title={item.title}
          image={item.image}
          price={item.price}
          type="PastOrder"
        />
      ))}
    </ScrollView>
  );
};

export default PastOrder;

const styles = StyleSheet.create({});
