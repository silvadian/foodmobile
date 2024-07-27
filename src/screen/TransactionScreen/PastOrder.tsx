import React from 'react';
import { RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { FoodCard } from '../../components';
import { useGetOrderQuery } from '../../redux';
import { config } from '../../redux/api/config';
import { moneyFormat } from '../../utils';

const PastOrder = () => {
  const {data, isLoading, refetch} = useGetOrderQuery({status: 'Completed'});
  return (
    <ScrollView
      style={{backgroundColor: '#3F3F3F'}}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refetch} />
      }>
      {data?.data?.map(item => (
        <FoodCard
          key={item.id}
          variant="landscape"
          star={1}
          title={item.food.title}
          image={{
            uri: `${config.serviceMediaUrl}/images/${item.food.picture}`,
          }}
          price={`${item.amount} items • ${moneyFormat(item.food.price)}`}
          type="PastOrder"
          isCancel={item.status === 'Canceled'}
        />
      ))}
    </ScrollView>
  );
};

export default PastOrder;

const styles = StyleSheet.create({});
