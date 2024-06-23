import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Container, FoodCard, Gap, Header } from '../../components';
import { useGetFoodsQuery } from '../../redux';
import { config } from '../../redux/api/config';
import { StackNavigation } from '../../utils';

const ProductScreen = () => {
  const navigation = useNavigation<StackNavigation>();
  const {data, isLoading, isError, isSuccess, error} =
    useGetFoodsQuery(undefined);

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
          {data?.data?.length && data?.data?.length > 0
            ? data.data.map(item => (
                <FoodCard
                  key={item.id}
                  title={item.title}
                  star={item.star}
                  image={{uri: `${config.serviceMediaUrl}/images/${item.picture}`}}
                  containerStyle={{width: '44%', marginVertical: 12}}
                  variant="potrait"
                  onPress={() =>
                    navigation.navigate('AdminFoodDetails', {id: item.id})
                  }
                />
              ))
            : null}
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
