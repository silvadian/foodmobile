import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { FoodCard } from '../../components';
import { useGetOrderQuery } from '../../redux';
import { generateParams } from '../../utils';

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
