import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Container, FoodCard, Gap, Header} from '../../components';
import {dummyImage1} from '../../assets';
import {StackNavigation} from '../../utils';
import {useNavigation} from '@react-navigation/native';

const ProductScreen = () => {
  const navigation = useNavigation<StackNavigation>();
  return (
    <Container>
      <Header title="Product" noBack desc="Your product" />
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
            <FoodCard
              key={item}
              variant="potrait"
              star={4}
              title="Cherry Healthy"
              image={dummyImage1}
              containerStyle={{width: '44%', marginVertical: 12}}
              onPress={() => navigation.navigate('FoodDetails', {id: item})}
            />
          ))}
        </View>
      </ScrollView>
      <Gap height={12} />
      <View style={{paddingHorizontal: 16}}>
        <Button
          label="Add product"
          onPress={() => navigation.navigate('AddProductScreen')}
        />
      </View>
    </Container>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
