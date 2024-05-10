import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header} from '../../components';
import ProductCard from './ProductCard';
import KeyValue from './KeyValue';

const PaymentAddress = () => {
  return (
    <View style={{backgroundColor: '#3F3F3F', flex: 1}}>
      <Header title="Payment" desc="You deserve better meal" />
      <Gap height={24} backgroundColor="#4F4F4F" />
      <View style={styles.mainWrapper}>
        <Text style={styles.headerTitle}>Item Ordered</Text>
        <Gap height={12} />
        <ProductCard />
      </View>
      <View style={styles.mainWrapper}>
        <Text style={styles.headerTitle}>Details Transaction</Text>
        <Gap height={5} />
        <KeyValue title="Chery healty" value="IDR 18.390.000" />
        <KeyValue title="Driver" value="IDR 50.000" />
        <KeyValue title="Tax 10%" value="IDR 1.800.390" />
        <KeyValue isGreen title="Total Price" value="IDR 390.803.000" />
        <Gap height={13} />
      </View>
      <Gap height={24} backgroundColor="#4F4F4F" />
      <View style={styles.mainWrapper}>
        <Text style={styles.headerTitle}>Deliver to:</Text>
        <Gap height={5} />
        <KeyValue title="Name" value="Angga Risky" />
        <KeyValue title="Phone No." value="0822 0819 9688" />
        <KeyValue title="Address" value="Setra Duta Palima" />
        <KeyValue title="House No." value="A5 Hook" />
        <KeyValue title="City" value="Bandung" />
      </View>
      <View style={{flex: 1}} />
      <View style={styles.buttonWrap}>
        <Button label="Checkout Now" />
      </View>
    </View>
  );
};

export default PaymentAddress;

const styles = StyleSheet.create({
  mainWrapper: {
    marginHorizontal: 24,
    marginTop: 16,
  },
  headerTitle: {
    color: '#E2E2E2',
    fontSize: 14,
    fontWeight: '400',
  },
  buttonWrap: {
    paddingVertical: 26,
    paddingHorizontal: 24,
    backgroundColor: '#4F4F4F',
  },
});
