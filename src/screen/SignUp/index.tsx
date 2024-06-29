import React, {useCallback, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ICCamera, ICGallery, ICX} from '../../assets';
import {
  Button,
  Container,
  Gap,
  Header,
  Input,
  InputAvatar,
  ShowPicker,
} from '../../components';
import {SignUpProps} from '../../utils';
import {useRegisterMutation} from '../../redux';

const SignUp = ({navigation}: SignUpProps) => {
  const [mutation] = useRegisterMutation();

  const [showPicker, setShowPicker] = useState(false);
  const [uri, setUri] = useState<string>();
  const [base64, setBase64] = useState<string>();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const GotoAddress = useCallback(() => {
    mutation({full_name: fullName, image: base64, email, password})
      .unwrap()
      .then(res => {
        const {id} = res.data;
        navigation.navigate('SignUpAddress', {id});
      })
      .catch((err: any) => {
        console.log('ini lagi error', err);
      });
  }, [fullName, email, password, base64]);

  const handleOpenCamera = useCallback(async () => {
    try {
      const result = await launchCamera({
        mediaType: 'photo',
        includeBase64: true,
      });
      if (result.assets) {
        const uri = result?.assets[0].uri;
        const base64 = `data:${result.assets[0].type};base64,${result.assets[0].base64}`;
        setUri(uri);
        setBase64(base64);
        setShowPicker(false);
      }
    } catch (error) {
      console.log('error', error);
    }
  }, []);
  const handleOpenGallery = useCallback(async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        includeBase64: true,
      });
      if (result.assets) {
        const uri = result?.assets[0].uri;
        const base64 = `data:${result.assets[0].type};base64,${result.assets[0].base64}`;
        setUri(uri);
        setBase64(base64);
        setShowPicker(false);
      }
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  return (
    <Container style={styles.container}>
      <Header title="SignUp" desc="register and eat" />
      <Gap height={24} backgroundColor="#4F4F4F" />
      <View style={styles.form}>
        <Gap height={26} />
        <InputAvatar
          onPress={() => setShowPicker(true)}
          uri={uri}></InputAvatar>
        <Input
          value={fullName}
          onChangeText={val => setFullName(val)}
          label="Full Name"
          placeholder="Type your full name"
        />
        <Gap height={16} />
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
          secureTextEntry
          label="Password"
          placeholder="Type your password"
        />
        <Gap height={24} />
        <Button label="Continue" onPress={GotoAddress} />
      </View>
      {showPicker ? (
        <ShowPicker
          handleOpenCamera={handleOpenCamera}
          handleOpenGallery={handleOpenGallery}
          setShowPicker={() => setShowPicker(prev => !prev)}
        />
      ) : null}
    </Container>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {},
  form: {
    paddingHorizontal: 24,
  },
});
