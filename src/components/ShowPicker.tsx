import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ICCamera, ICGallery, ICX} from '../assets';

interface ShowPickerProps {
  handleOpenCamera: () => void;
  handleOpenGallery: () => void;
  setShowPicker: () => void;
}

const ShowPicker = ({
  handleOpenCamera,
  handleOpenGallery,
  setShowPicker,
}: ShowPickerProps) => {
  return (
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
        onPress={setShowPicker}>
        <ICX />
      </TouchableOpacity>
    </View>
  );
};

export default ShowPicker;

const styles = StyleSheet.create({
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
