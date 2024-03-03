import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {dummyImage1} from '../../assets';
import {FoodCard, HomeHeader} from '../../components';
import HomeTab from './HomeTab';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../utils';

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigation>();
  return (
    <View style={{flex: 1, backgroundColor: '#4F4F4F'}}>
      <HomeHeader />
      <View>
        <ScrollView
          horizontal
          style={{minHeight: 256, paddingTop: 24}}
          showsHorizontalScrollIndicator={false}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
            <FoodCard
              key={item}
              variant="potrait"
              star={4}
              title="Cherry Healthy"
              image={dummyImage1}
              onPress={() => navigation.navigate('FoodDetails', {id: item})}
            />
          ))}
        </ScrollView>
      </View>

      <HomeTab />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
