import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ICChevronRight } from '../../assets';
import { Container, Gap, InputAvatar } from '../../components';
import { clearUserData, clearUserToken, useAppDispatch } from '../../redux';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const handleLogout = useCallback(() => {
    dispatch(clearUserData());
    dispatch(clearUserToken());
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'SignIn'}],
      }),
    );
  }, []);

  return (
    <Container>
      <Gap height={26} />
      <InputAvatar onPress={() => {}}></InputAvatar>
      <Gap height={26} />
      <View style={styles.about}>
        <Text style={styles.name}>Hari</Text>
        <Text style={styles.email}>Hari@mail.com</Text>
      </View>
      <Gap height={26} />
      <Gap height={24} backgroundColor="#4F4F4F" />
      <Gap height={6} />
      <TouchableOpacity style={styles.menu}>
        <Text style={styles.menuTitle}>Edit Profile</Text>
        <ICChevronRight />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menu}>
        <Text style={styles.menuTitle}>Home Address</Text>
        <ICChevronRight />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menu}>
        <Text style={styles.menuTitle}>Security</Text>
        <ICChevronRight />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menu} onPress={handleLogout}>
        <Text style={styles.menuTitle}>Log Out</Text>
        <ICChevronRight />
      </TouchableOpacity>
    </Container>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  about: {
    alignItems: 'center',
  },
  name: {
    color: '#e2e2e2',
    fontSize: 18,
    fontWeight: '500',
  },
  email: {
    color: '#8D92A3',
    fontSize: 14,
    fontWeight: '300',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  menuTitle: {
    color: '#e2e2e2',
    fontSize: 14,
    fontWeight: '400',
  },
});
