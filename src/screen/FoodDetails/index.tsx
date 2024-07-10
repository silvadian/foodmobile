import React, {useCallback, useMemo, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICArrowLeft, ICStar} from '../../assets';
import {Button, Gap} from '../../components';
import {useGetFoodQuery} from '../../redux';
import {config} from '../../redux/api/config';
import {FoodDetailsProps, moneyFormat} from '../../utils';
import {useLoading} from '../../hook';

const {width} = Dimensions.get('screen');

const FoodDetails = ({navigation, route}: FoodDetailsProps) => {
  const [amount, setAmount] = useState(1);
  const {id} = route.params;
  const {data, isLoading} = useGetFoodQuery(id);

  useLoading({isLoading});

  const totalPrice = useMemo(() => {
    const price = data?.data.price || 0;
    return price * amount;
  }, [data, amount]);

  const handleCheckout = useCallback(() => {
    if (data) navigation.navigate('PaymentAddress', {food: data.data, amount});
  }, [data, amount]);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `${config.serviceMediaUrl}/images/${data?.data.picture}`,
        }}
        style={styles.image}
      />
      <View style={styles.wrapper}>
        <View style={styles.headerWrap}>
          <View style={styles.titleWrap}>
            <Text style={styles.title}>{data?.data.title}</Text>
            <Gap height={6} />

            <View style={styles.starWrap}>
              {[1, 2, 3, 4, 5].map(item => (
                <ICStar
                  fill={(data?.data.star ?? 0) >= item ? '#FFC700' : '#ECECEC'}
                  key={item}
                />
              ))}
            </View>
          </View>
          <View style={styles.counterWrap}>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => setAmount(prev => (prev > 1 ? prev - 1 : 1))}>
              <Text style={styles.textCounter}>-</Text>
            </TouchableOpacity>
            <Text style={[styles.textCounter, {minWidth: 16}]}>{amount}</Text>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => setAmount(prev => prev + 1)}>
              <Text style={styles.textCounter}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Gap height={12} />
        <View style={styles.bodyWrap}>
          <Text style={styles.descript}>{data?.data.description}</Text>
          <Text style={styles.descriptTitle}>Ingredients</Text>
          <Text style={styles.descript}>{data?.data.ingredients}</Text>
        </View>
        <View style={styles.FooterWrap}>
          <View style={styles.footerItem}>
            <Text style={styles.priceLabel}>Total Price</Text>
            <Text style={styles.price}>{moneyFormat(totalPrice)}</Text>
          </View>
          <View style={styles.footerItem}>
            <Button label="Order Now" onPress={handleCheckout} />
          </View>
        </View>
        <Gap height={24} />
      </View>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <ICArrowLeft fill="#3F3F3F" />
      </TouchableOpacity>
    </View>
  );
};

export default FoodDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width,
    height: 330,
  },
  wrapper: {
    backgroundColor: '#3F3F3F',
    flex: 1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -30,
    paddingHorizontal: 16,
  },
  headerWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 26,
  },
  titleWrap: {},
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: '#E2E2E2',
  },
  starWrap: {
    flexDirection: 'row',
  },
  counterWrap: {
    flexDirection: 'row',
    gap: 10,
  },
  counterButton: {
    width: 26,
    height: 26,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#8D92A3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCounter: {
    color: '#E2E2E2',
  },
  bodyWrap: {
    flex: 1,
  },
  descript: {
    color: '#8D92A3',
    fontSize: 14,
    fontWeight: '400',
  },
  descriptTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#E2E2E2',
    marginTop: 12,
    marginBottom: 4,
  },
  FooterWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerItem: {flex: 1},
  priceLabel: {
    color: '#8D92A3',
    fontSize: 14,
    fontWeight: '400',
  },
  price: {
    fontSize: 18,
    fontWeight: '400',
    color: '#E2E2E2',
  },
  back: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
});
