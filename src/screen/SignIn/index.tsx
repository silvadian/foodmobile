import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Container, Gap, Header, Input} from '../../components';
import {useLazyGetUserQuery, useLoginMutation} from '../../redux';
import {SignInProps} from '../../utils';
import {useLoading} from '../../hook';

const SignIn = ({navigation}: SignInProps) => {
  const [mutation] = useLoginMutation();
  const [triger] = useLazyGetUserQuery(undefined);

  const {setIsLoading} = useLoading({});

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createNewAccount = useCallback(() => {
    navigation.navigate('SignUp');
  }, []);

  const onSigInPress = useCallback(() => {
    setIsLoading(true);
    mutation({email, password})
      .unwrap()
      .then(() => {
        triger(undefined)
          .unwrap()
          .then(res => {
            setIsLoading(false);
            if (res.data.rules === 'user') navigation.navigate('MainApp');
            else navigation.navigate('AdminDashboard');
          })
          .catch(() => {
            setIsLoading(false);
          });
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [email, password]);

  return (
    <Container style={styles.container}>
      <Header noBack title="SignIn" desc="Find your best ever meal" />
      <Gap height={24} backgroundColor="#4F4F4F" />
      <View style={styles.form}>
        <Input
          value={email}
          onChangeText={val => setEmail(val)}
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <Input
          value={password}
          onChangeText={val => setPassword(val)}
          label="Password"
          placeholder="Type your password"
          secureTextEntry
        />
        <Gap height={24} />
        <Button label="SignIn" onPress={onSigInPress} />
        <Gap height={12} />
        <Button
          label="Create New Account"
          variant="Secondary"
          onPress={createNewAccount}
        />
        <Gap height={12} />
      </View>
    </Container>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {},
  form: {
    paddingHorizontal: 24,
  },
});
