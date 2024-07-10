import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { FoodCard } from '../../components';
import { useGetFoodsQuery } from '../../redux';
import { config } from '../../redux/api/config';

const NewTaste = () => {
  const {data} = useGetFoodsQuery(undefined);
  const navigation = useNavigation<any>()
  return (
    <View style={{backgroundColor: '#3F3F3F'}}>
      <ScrollView>
        {data?.data?.length && data?.data?.length > 0
          ? data.data.map(item => (
              <FoodCard
                key={item.id}
                variant="landscape"
                star={item.star}
                title={item.title}
                image={{
                  uri: `${config.serviceMediaUrl}/images/${item.picture}`,
                }}
                price={item.price}
                onPress={
                  () => 
                  navigation.navigate('FoodDetails', {id: item.id})
                }
              />
            ))
          : null}
      </ScrollView>
    </View>
  );
};

export default NewTaste;

const styles = StyleSheet.create({});
