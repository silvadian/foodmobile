import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useMemo} from 'react';
import {ILLogo} from '../../assets';
import {CommonActions} from '@react-navigation/native';
import {SplashScreenProps} from '../../utils';
import {useAppSelector} from '../../redux';
import {shallowEqual} from 'react-redux';

const SplashScreen = ({navigation}: SplashScreenProps) => {
  const {isLogin} = useAppSelector(
    state => state.userToken.userToken,
    shallowEqual,
  );
  const {rules} = useAppSelector(
    state => state.userData.userData,
    shallowEqual,
  );

  const name = useMemo(() => {
    if (isLogin && rules === 'user') return 'MainApp';
    if (isLogin && rules === 'admin') return 'AdminDashboard';
    return 'SignIn';
  }, [isLogin, rules]);

  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name}],
        }),
      );
    }, 3000);
  }, [navigation, name]);

  return (
    <View style={styles.container}>
      <ILLogo></ILLogo>
      <Text style={styles.text}>FoodMarket</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: '500',
    lineHeight: 48,
    color: '#020202',
  },
});
