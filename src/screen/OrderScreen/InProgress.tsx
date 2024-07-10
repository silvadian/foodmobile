import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useGetOrderQuery} from '../../redux';
import {generateParams} from '../../utils';
import {FoodCard} from '../../components';

const InProgress = () => {
  const {data} = useGetOrderQuery(generateParams('status', 'Pending'));
  console.log('data', data);
  return (
    <ScrollView style={{backgroundColor: '#3F3F3F'}}>
      {data?.data?.map(item => (
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

export default InProgress;

const styles = StyleSheet.create({});
