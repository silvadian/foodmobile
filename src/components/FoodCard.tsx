import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Gap} from '.';
import {ICStar} from '../assets';

interface FoodCardPotraitProps {
  image: ImageSourcePropType;
  title: string;
  star: number;
  variant: 'potrait';
  onPress?: () => void;
}

interface FoodCardLandscapeProps {
  image: ImageSourcePropType;
  title: string;
  star: number;
  variant: 'landscape';
  price: number;
  type?: 'PastOrder' | 'InProgress';
  isCancel?: boolean;
  onPress?: () => void;
}

const FoodCard = (props: FoodCardLandscapeProps | FoodCardPotraitProps) => {
  if (props.variant === 'landscape')
    return (
      <TouchableOpacity
        style={styles.landscapeContainer}
        onPress={props.onPress}>
        <Image
          source={props.image}
          style={styles.landscapeImage}
          resizeMode="cover"
        />
        <View style={{flex: 1, paddingVertical: 8}}>
          <Text style={styles.title}>{props.title}</Text>
          <Gap height={4} />
          <Text style={styles.price}>{props.price}</Text>
        </View>
        {props.type === 'PastOrder' ? (
          <View>
            <Text style={styles.date}>Jun 12, 14:00</Text>
            <Gap height={2} />
            <Text style={styles.cancel}>
              {props.isCancel ? 'Cancelled' : ''}
            </Text>
          </View>
        ) : (
          <View style={styles.starWrapper}>
            {[1, 2, 3, 4, 5].map(item => (
              <ICStar
                fill={props.star >= item ? '#FFC700' : '#ECECEC'}
                key={item}
              />
            ))}
          </View>
        )}
      </TouchableOpacity>
    );

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image source={props.image} style={styles.image} resizeMode="cover" />
      <Gap height={12} />
      <Text style={styles.title}>{props.title}</Text>
      <Gap height={4} />
      <View style={styles.starWrapper}>
        {[1, 2, 3, 4, 5].map(item => (
          <ICStar
            fill={props.star >= item ? '#FFC700' : '#ECECEC'}
            key={item}
          />
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 210,
    borderRadius: 8,
    backgroundColor: '#3F3F3F',
    marginHorizontal: 12,
  },
  image: {
    width: 200,
    height: 140,
  },
  title: {
    color: '#E2E2E2',
    fontWeight: '400',
    fontSize: 16,
    paddingLeft: 8,
  },

  starWrapper: {
    flexDirection: 'row',
    paddingLeft: 12,
  },
  landscapeContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    alignItems: 'center',
    marginVertical: 8,
  },
  price: {
    color: '#8D92A3',
    paddingLeft: 8,
  },
  landscapeImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  date: {
    fontSize: 10,
    fontWeight: '400',
  },
  cancel: {
    fontSize: 10,
    fontWeight: '400',
    color: '#D9435E',
  },
});
