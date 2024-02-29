import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FoodCard, Gap, HomeHeader} from '../../components';
import {dummyImage1, dummyImage2, dummyImage3} from '../../assets';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#4F4F4F'}}>
      <HomeHeader />
      <ScrollView
        horizontal
        style={{minHeight: 256, paddingTop: 24}}
        showsHorizontalScrollIndicator={false}>
        <FoodCard
          variant="potrait"
          star={4}
          title="Cherry Healthy"
          image={dummyImage1}
        />
        <FoodCard
          variant="potrait"
          star={3}
          title="Burger Tamayo"
          image={dummyImage2}
        />
        <FoodCard
          variant="potrait"
          star={2}
          title="Cherry Healthy"
          image={dummyImage3}
        />
        <FoodCard
          variant="potrait"
          star={1}
          title="Burger Tamayo"
          image={dummyImage3}
        />
        <FoodCard
          variant="potrait"
          star={5}
          title="Cherry Healthy"
          image={dummyImage2}
        />
        <FoodCard
          variant="potrait"
          star={3}
          title="Burger Tamayo"
          image={dummyImage1}
        />
        <FoodCard
          variant="potrait"
          star={2}
          title="Burger Tamayo"
          image={dummyImage2}
        />
        <FoodCard
          variant="potrait"
          star={1}
          title="Burger Tamayo"
          image={dummyImage1}
        />
      </ScrollView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#3F3F3F'}}>
        <FoodCard
          variant="landscape"
          star={1}
          title="Burger Tamayo"
          image={dummyImage1}
          price={2000000}
        />
        <FoodCard
          variant="landscape"
          star={1}
          title="Burger Tamayo"
          image={dummyImage1}
          price={2000000}
        />
        <FoodCard
          variant="landscape"
          star={1}
          title="Burger Tamayo"
          image={dummyImage1}
          price={2000000}
        />
        <FoodCard
          variant="landscape"
          star={1}
          title="Burger Tamayo"
          image={dummyImage1}
          price={2000000}
        />
        <FoodCard
          variant="landscape"
          star={1}
          title="Burger Tamayo"
          image={dummyImage1}
          price={2000000}
        />
        <FoodCard
          variant="landscape"
          star={1}
          title="Burger Tamayo"
          image={dummyImage1}
          price={2000000}
        />
        <FoodCard
          variant="landscape"
          star={1}
          title="Burger Tamayo"
          image={dummyImage1}
          price={2000000}
        />
        <FoodCard
          variant="landscape"
          star={1}
          title="Burger Tamayo"
          image={dummyImage1}
          price={2000000}
        />
        <FoodCard
          variant="landscape"
          star={1}
          title="Burger Tamayo"
          image={dummyImage1}
          price={2000000}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
