import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {
  Button,
  Container,
  Gap,
  Header,
  Input,
  ShowPicker,
} from '../../components';
import UploadFile from './UploadFile';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useCreateFoodMutation} from '../../redux';
import {AddProductScreenProps} from '../../utils';

const AddProductScreen = ({navigation}: AddProductScreenProps) => {
  const [mutate] = useCreateFoodMutation();

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [price, setPrice] = useState('');
  const [star, setStar] = useState('');
  const [recommended, setRecommended] = useState('');
  const [popular, setPopular] = useState('');
  const [image, setImage] = useState('');
  const [uri, setUri] = useState<string | undefined>(undefined);

  const handleSave = useCallback(() => {
    mutate({
      title,
      description,
      ingredients,
      price,
      star,
      recommended,
      popular,
      image,
    })
      .unwrap()
      .then(res => {
        navigation.goBack();
      })
      .catch(err => console.log('err', err));
  }, [
    title,
    description,
    ingredients,
    price,
    star,
    recommended,
    popular,
    image,
  ]);

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
        setImage(base64);
        setShow(false);
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
        setImage(base64);
        setShow(false);
      }
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  return (
    <Container>
      <Header title="Add product" desc="Add your new product" />
      <ScrollView style={{paddingHorizontal: 24}}>
        <Input
          value={title}
          onChangeText={setTitle}
          label="Title"
          placeholder="Type your product title"
        />
        <Gap height={16} />
        <Input
          value={description}
          onChangeText={setDescription}
          label="Description"
          placeholder="Type your product description"
        />
        <Gap height={16} />
        <Input
          value={ingredients}
          onChangeText={setIngredients}
          label="Ingredients"
          placeholder="Type your product ingredients"
        />
        <Input
          value={price}
          onChangeText={setPrice}
          label="Price"
          placeholder="Type your product price"
          keyboardType="numeric"
        />
        <Input
          value={star}
          onChangeText={setStar}
          label="Star"
          placeholder="Type your product star"
          keyboardType="numeric"
        />
        <Input
          value={recommended}
          onChangeText={setRecommended}
          label="Recommended"
          placeholder="Type your product recommended"
          keyboardType="numeric"
        />
        <Input
          value={popular}
          onChangeText={setPopular}
          label="Popular"
          placeholder="Type your product popular"
          keyboardType="numeric"
        />
        <Gap height={24} />
        <UploadFile uri={uri} setShowPicker={() => setShow(prev => !prev)} />
        <Gap height={24} />
        <Button label="Save" onPress={handleSave} />
        <Gap height={32} />
      </ScrollView>
      {show ? (
        <ShowPicker
          handleOpenCamera={handleOpenCamera}
          handleOpenGallery={handleOpenGallery}
          setShowPicker={() => setShow(prev => !prev)}
        />
      ) : null}
    </Container>
  );
};

export default AddProductScreen;

const styles = StyleSheet.create({});
