import React from 'react';
import { Image } from 'react-native';

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 45, height: 25 }}
      source={require('../assets/logo-telkom.png')}
    />
  );
};

export default LogoTitle;
