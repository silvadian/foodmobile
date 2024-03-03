import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {ICArrowLeft, ICStar, dummyImage1} from '../../assets';
import {Button, Gap} from '../../components';
import {FoodDetailsProps} from '../../utils';

const {width} = Dimensions.get('screen');

const FoodDetails = ({navigation}: FoodDetailsProps) => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Image source={dummyImage1} style={styles.image} />
      <View style={styles.wrapper}>
        <View style={styles.headerWrap}>
          <View style={styles.titleWrap}>
            <Text style={styles.title}>Cherry Healthy</Text>
            <Gap height={6} />
            <View style={styles.starWrap}>
              <ICStar fill="#FFC700" />
              <ICStar fill="#FFC700" />
              <ICStar fill="#FFC700" />
              <ICStar fill="#FFC700" />
              <ICStar fill="#FFC700" />
            </View>
          </View>
          <View style={styles.counterWrap}>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => setCounter(prev => (prev > 0 ? prev - 1 : 0))}>
              <Text style={styles.textCounter}>-</Text>
            </TouchableOpacity>
            <Text style={[styles.textCounter, {minWidth: 16}]}>{counter}</Text>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => setCounter(prev => prev + 1)}>
              <Text style={styles.textCounter}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Gap height={12} />
        <View style={styles.bodyWrap}>
          <Text style={styles.descript}>
            Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            teratur.
          </Text>
          <Text style={styles.descriptTitle}>Ingredients</Text>
          <Text style={styles.descript}>Seledri, telur, blueberry, madu.</Text>
        </View>
        <View style={styles.FooterWrap}>
          <View style={styles.footerItem}>
            <Text style={styles.priceLabel}>Total Price</Text>
            <Text style={styles.price}>IDR 12.289.000</Text>
          </View>
          <View style={styles.footerItem}>
            <Button label="Order Now" />
          </View>
        </View>
        <Gap height={24}/>
      </View>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <ICArrowLeft fill='#3F3F3F' />
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
