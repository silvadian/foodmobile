import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {
  Button,
  Container,
  Gap,
  Header,
  Input,
  InputAvatar,
} from '../../components';
import {SignInProps, SignUpProps} from '../../utils';
import {ICCamera, ICGallery, ICX} from '../../assets';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const SignUp = ({navigation}: SignUpProps) => {
  const [showPicker, setShowPicker] = useState(false);
  const [uri, setUri] = useState<string>();
  const [base64, setBase64] = useState<string>();
  const GotoAddress = useCallback(() => {
    navigation.navigate('SignUpAddress');
  }, []);
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
        <Input label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <Input label="Email Address" placeholder="Type your email address" />
        <Gap height={16} />
        <Input label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Continue" onPress={GotoAddress} />
      </View>
      {showPicker ? (
        <View style={styles.openPicker}>
          <View style={styles.pickerItem}>
            <TouchableOpacity onPress={handleOpenCamera}>
              <ICCamera width={48} height={48} fill="#8D92A3" />
              <Text style={styles.pickerText}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOpenGallery}>
              <ICGallery width={48} height={48} fill="#8D92A3" />
              <Text style={styles.pickerText}>Gallery</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{alignItems: 'flex-end'}}
            onPress={() => setShowPicker(false)}>
            <ICX />
          </TouchableOpacity>
        </View>
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
  openPicker: {
    position: 'absolute',
    bottom: 32,
    left: 16,
    right: 16,
    maxWidth: Dimensions.get('window').width,
    backgroundColor: '#E2E2E2',
    padding: 16,
    borderRadius: 12,
  },
  pickerItem: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  pickerText: {
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
    color: '#8D92A3',
  },
});
