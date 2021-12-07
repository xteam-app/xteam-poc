import React, { FC } from 'react';
import { Pressable, PressableProps } from 'react-native';

export const Button: FC<PressableProps> = ({ children, ...props }) => {
  return <Pressable {...props}>{children}</Pressable>;
};
