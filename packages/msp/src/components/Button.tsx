import React, { FC } from 'react';
import { Pressable } from 'react-native';

export const Button: FC = ({onPress, children}) => {
  return (
    <Pressable onPress={onPress}>
      {children}
    </Pressable>
  );
};
