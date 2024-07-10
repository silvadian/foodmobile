import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {Button, Gap, Header} from '../../components';
import ProductCard from './ProductCard';
import KeyValue from './KeyValue';
import {useSelector} from 'react-redux';
import {RootState, useCreateOrderMutation} from '../../redux';
import {PaymentAddressProps, moneyFormat} from '../../utils';
import {config} from '../../redux/api/config';
import {useLoading} from '../../hook';

const PaymentAddress = ({route, navigation}: PaymentAddressProps) => {
  const [mutate] = useCreateOrderMutation();
  const {setIsLoading} = useLoading({});
  const {
    id: userId,
    full_name,
    address,
  } = useSelector((state: RootState) => state.userData.userData);
  const {amount, food} = route.params;
  const {title, price, picture, id: foodId} = food;

  const handleCheckOutNow = useCallback(() => {
    setIsLoading(true);
    mutate({
      user_id: userId,
      food_id: foodId,
      amount,
      status: 'Pending',
      transaction_code: 'test',
    })
      .unwrap()
      .then(res => {
        setIsLoading(false);
        navigation.navigate("MainApp")
      })
      .catch(err => {
        setIsLoading(false);
      });
  }, [amount, userId]);

  return (
    <View style={{backgroundColor: '#3F3F3F', flex: 1}}>
      <Header title="Payment" desc="You deserve better meal" />
      <Gap height={24} backgroundColor="#4F4F4F" />
      <View style={styles.mainWrapper}>
        <Text style={styles.headerTitle}>Item Ordered</Text>
        <Gap height={12} />
        <ProductCard
          title={title}
          price={price}
          amount={amount}
          image={{uri: `${config.serviceMediaUrl}/images/${picture}`}}
        />
      </View>
      <View style={styles.mainWrapper}>
        <Text style={styles.headerTitle}>Details Transaction</Text>
        <Gap height={5} />
        <KeyValue title={title} value={amount * price} />
        <KeyValue title="Driver" value={moneyFormat(25000)} />
        <KeyValue
          isGreen
          title="Total Price"
          value={moneyFormat(amount * price + 25000)}
        />
        <Gap height={13} />
      </View>
      <Gap height={24} backgroundColor="#4F4F4F" />
      <View style={styles.mainWrapper}>
        <Text style={styles.headerTitle}>Deliver to:</Text>
        <Gap height={5} />
        <KeyValue title="Name" value={full_name} />
        <KeyValue title="Phone No." value={address.phone} />
        <KeyValue title="Address" value={address.address} />
        <KeyValue title="House No." value={address.house_number} />
        <KeyValue title="City" value={address.city} />
      </View>
      <View style={{flex: 1}} />
      <View style={styles.buttonWrap}>
        <Button label="Checkout Now" onPress={handleCheckOutNow} />
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
