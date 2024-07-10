import React, {useCallback, useMemo, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICArrowLeft, ICStar, dummyImage1} from '../../assets';
import {Button, Gap} from '../../components';
import {AdminFoodDetailsProps} from '../../utils';
import {config} from '../../redux/api/config';
import {useDeleteFoodMutation, useGetFoodQuery} from '../../redux';

const {width} = Dimensions.get('screen');

const AdminFoodDetails = ({navigation, route}: AdminFoodDetailsProps) => {
  const {id} = route.params;
  const [mutate] = useDeleteFoodMutation();
  const {data} = useGetFoodQuery(id);
  const star = useMemo(() => data?.data?.star || 0, [data]);

  const onDeletePress = useCallback(() => {
    mutate({id})
      .unwrap()
      .then(res => {
        navigation.goBack();
      })
      .catch(err => console.log('err', err));
  }, [id, mutate]);

  return (
    <View style={styles.container}>
      <Image
        source={{uri: `${config.serviceMediaUrl}/images/${data?.data.picture}`}}
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
                  fill={star >= item ? '#FFC700' : '#ECECEC'}
                  key={item}
                />
              ))}
            </View>
          </View>
        </View>
        <Gap height={12} />
        <View style={styles.bodyWrap}>
          <Text style={styles.descript}>{data?.data.description}</Text>
          <Text style={styles.descriptTitle}>Ingredients</Text>
          <Text style={styles.descript}>{data?.data.ingredients}</Text>
          <Text style={styles.descriptTitle}>Price</Text>
          <Text style={styles.descript}>{data?.data.price}</Text>
        </View>
        <View style={styles.FooterWrap}>
          <View style={styles.footerItem}>
            <Button label="Update" onPress={() => {}} />
            <Gap height={16} />
            <Button
              label="Delete"
              variant="Secondary"
              onPress={onDeletePress}
            />
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

export default AdminFoodDetails;

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
