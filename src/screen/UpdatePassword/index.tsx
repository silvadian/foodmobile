import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Button, Container, Gap, Header, Input} from '../../components';

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = useCallback(() => {}, []);

  return (
    <Container style={styles.container}>
      <Header title="Update Password" desc="Make sure it`s valid" />
      <Gap height={24} backgroundColor="#4F4F4F" />
      <View style={styles.form}>
        <Input
          value={oldPassword}
          onChangeText={setOldPassword}
          label="Old Passwword"
          placeholder="Type your old password"
          secureTextEntry
        />
        <Gap height={16} />
        <Input
          value={newPassword}
          onChangeText={setNewPassword}
          label="New password"
          placeholder="Type your new password"
          secureTextEntry
        />
        <Gap height={16} />
        <Input
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          label="Confirm password"
          placeholder="retype your password"
          secureTextEntry
        />

        <Gap height={24} />
        <Button label="Sign Up Now" onPress={handleSubmit} />
        <Gap height={12} />
      </View>
    </Container>
  );
};

export default UpdatePassword;

const styles = StyleSheet.create({
  container: {},
  form: {
    paddingHorizontal: 24,
  },
});
