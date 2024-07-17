import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Button, Container, Gap, Header, Input} from '../../components';

const UpdateAddress = () => {
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = useCallback(() => {
    const params = {
      phone,
      address,
      house_number: houseNumber,
      city,
    };
    console.log('params', params)
  }, [phone, address, houseNumber, city]);

  return (
    <Container style={styles.container}>
      <Header title="Address" desc="Make sure it`s valid" />
      <Gap height={24} backgroundColor="#4F4F4F" />
      <View style={styles.form}>
        <Input
          value={phone}
          onChangeText={val => setPhone(val)}
          label="Phone number"
          keyboardType="numeric"
          placeholder="Type your phone number"
        />
        <Gap height={16} />
        <Input
          value={address}
          onChangeText={val => setAddress(val)}
          label="Address"
          placeholder="Type your address"
        />
        <Input
          value={houseNumber}
          onChangeText={val => setHouseNumber(val)}
          label="House Number"
          placeholder="Type your house number"
        />
        <Gap height={16} />
        <Input
          value={city}
          onChangeText={val => setCity(val)}
          label="City"
          placeholder="Type your city"
        />
        <Gap height={24} />
        <Button label="Sign Up Now" onPress={handleSubmit} />
        <Gap height={12} />
      </View>
    </Container>
  );
};

export default UpdateAddress;

const styles = StyleSheet.create({
  container: {},
  form: {
    paddingHorizontal: 24,
  },
});
