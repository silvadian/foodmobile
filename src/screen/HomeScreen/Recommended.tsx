import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useGetFoodsQuery} from '../../redux';
import {generateParams} from '../../utils';
import {FoodCard} from '../../components';
import {config} from '../../redux/api/config';
import {useNavigation} from '@react-navigation/native';

const Recommended = () => {
  const {data} = useGetFoodsQuery(generateParams('key', 'recommended'));
  const navigation = useNavigation<any>();
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
                onPress={() =>
                  navigation.navigate('FoodDetails', {id: item.id})
                }
              />
            ))
          : null}
      </ScrollView>
    </View>
  );
};

export default Recommended;

const styles = StyleSheet.create({});
