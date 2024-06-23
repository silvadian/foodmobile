import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface UploadFileProps {
  setShowPicker: () => void;
  uri?: string;
}

const UploadFile = ({setShowPicker, uri}: UploadFileProps) => {
  return (
    <View style={styles.uploadWrap}>
      {uri ? (
        <Image source={{uri}} style={{width: 90, height: 90}} />
      ) : (
        <>
          <Text style={{color: '#E2E2E2'}}>Click button below to upload</Text>
          <Text style={{color: '#E2E2E2'}}>JPEG, PNG less than 5MB</Text>
        </>
      )}
      <TouchableOpacity style={styles.button} onPress={setShowPicker}>
        <Text style={styles.buttonText}>Upload image</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UploadFile;

const styles = StyleSheet.create({
  uploadWrap: {
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F2F2F2',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 12,
    gap: 12,
  },
  button: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#FFC700',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  buttonText: {
    color: '#FFC700',
    fontSize: 12,
    fontWeight: '600',
  },
});
