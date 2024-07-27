import React, {useCallback, useEffect, useRef, useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text} from 'react-native';
import {Button, FoodCard} from '../../components';
import {useGetOrderQuery, useUpdateOrderMutation} from '../../redux';
import {config} from '../../redux/api/config';
import RBSheet, {RBSheetRef} from 'react-native-raw-bottom-sheet';
import {generateParams, moneyFormat} from '../../utils';
import {useLoading} from '../../hook';

const InProgress = () => {
  const {data, isLoading, refetch} = useGetOrderQuery({status: 'Pending'});
  const [mutate, update] = useUpdateOrderMutation();
  useLoading({isLoading: update.isLoading});
  const rbSheetRef = useRef<RBSheetRef>(null);
  const [id, setid] = useState<number | undefined>();
console.log('data', data)
  useEffect(() => {
  }, [update]);

  const handleItemClick = useCallback(
    (id: number) => {
      rbSheetRef.current?.open();
      setid(id);
    },
    [rbSheetRef],
  );

  const handleUpdate = useCallback(
    (status: 'Completed' | 'Canceled') => {
      if (id) mutate({id, status});
      rbSheetRef.current?.close();
    },
    [id, mutate],
  );

  return (
    <>
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
            type="InProgress"
            onPress={() => handleItemClick(item.id)}
          />
        ))}
      </ScrollView>
      <RBSheet
        ref={rbSheetRef}
        draggable={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#cacaca',
          },
          container: styles.container,
        }}>
        <Text style={styles.title}>is the order already complete?</Text>
        <Button label="Done" onPress={() => handleUpdate('Completed')} />
        <Button
          label="Cancel Order"
          variant="Secondary"
          onPress={() => handleUpdate('Canceled')}
        />
      </RBSheet>
    </>
  );
};

export default InProgress;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 16,
    backgroundColor: '#4F4F4F',
    gap: 16,
  },
  title: {
    color: '#E2E2E2',
    fontWeight: '600',
    fontSize: 16,
    paddingLeft: 8,
    textAlign: 'center',
  },
});
