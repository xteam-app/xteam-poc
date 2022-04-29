import React, { FC } from 'react';
import { View } from 'react-native';

export const Box: FC = ({children}) => {
  return (
    <View>{children}</View>
  );
};
