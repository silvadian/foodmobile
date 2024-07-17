import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {FoodCard, Header} from '../../components';
import {useGetOrderQuery} from '../../redux';

const TransactionScreen = () => {
  const {data} = useGetOrderQuery(undefined);
  console.log('data useGetOrderQuery', data);
  return (
    <View style={{backgroundColor: '#3F3F3F', flex: 1}}>
      <Header title="incoming Orders" desc="" />
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
    </View>
  );
};

export default TransactionScreen;

const styles = StyleSheet.create({});
