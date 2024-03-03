import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FoodCard} from '../../components';
import {dummyImage1} from '../../assets';

const NewTaste = () => {
  return (
    <View style={{backgroundColor: '#3F3F3F'}}>
      <ScrollView>
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

export default NewTaste;

const styles = StyleSheet.create({});
