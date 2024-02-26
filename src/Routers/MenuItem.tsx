import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ICHome, ICOrder, ICProfile } from '../assets';

interface MenuItem {
  title: string;
  active: boolean;
  onPress : () => void
}

const MenuItem = ({title, active, onPress}: MenuItem) => {
  const Icon = () => {
    if (title === 'Home')
      return <ICHome fill={active ? '#FFC700' : '#3F3F3F'} stroke="#fff" />;
    if (title === 'Order')
      return <ICOrder fill={active ? '#FFC700' : '#3F3F3F'} stroke="#fff" />;
    return <ICProfile fill={active ? '#FFC700' : '#3F3F3F'} stroke="#fff" />;
  };

  return (
    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default MenuItem;
