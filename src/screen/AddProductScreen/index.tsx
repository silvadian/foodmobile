import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Container, Gap, Header, Input} from '../../components';

const AddProductScreen = () => {
  return (
    <Container>
      <Header title="Add product" desc="Add your new product" />
      <View style={{paddingHorizontal: 24}}>
        <Input label="Title" placeholder="Type your product title" />
        <Gap height={16} />
        <Input
          label="description"
          placeholder="Type your product description"
        />
        <Gap height={16} />
        <Input
          label="ingredients"
          placeholder="Type your product ingredients"
        />
      </View>
    </Container>
  );
};

export default AddProductScreen;

const styles = StyleSheet.create({});
