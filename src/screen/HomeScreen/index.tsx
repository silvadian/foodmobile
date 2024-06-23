import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { FoodCard, HomeHeader } from '../../components';
import { useGetFoodsQuery } from '../../redux';
import { config } from '../../redux/api/config';
import { StackNavigation } from '../../utils';
import HomeTab from './HomeTab';

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigation>();
  const {data} = useGetFoodsQuery(undefined);
  console.log('data', data);

  return (
    <View style={{flex: 1, backgroundColor: '#4F4F4F'}}>
      <HomeHeader />
      <View>
        <ScrollView
          horizontal
          style={{minHeight: 256, paddingTop: 24}}
          showsHorizontalScrollIndicator={false}>
          {data?.data?.length && data?.data?.length > 0
            ? data.data.map(item => (
                <FoodCard
                  key={item.id}
                  title={item.title}
                  star={item.star}
                  image={{
                    uri: `${config.serviceMediaUrl}/images/${item.picture}`,
                  }}
                  variant="potrait"
                  onPress={() =>
                    navigation.navigate('FoodDetails', {id: item.id})
                  }
                />
              ))
            : null}
        </ScrollView>
      </View>

      <HomeTab />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
