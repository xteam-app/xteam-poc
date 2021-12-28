import React, { FC } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useStyle } from '../utils/useStyle';
import { BaseProps } from '../types';
import { Text } from '.';

export interface ButtonProps extends BaseProps, TouchableOpacityProps {}

export const Button: FC<ButtonProps> = ({ tw, children, ...props }) => {
  const style = useStyle(tw);

  return (
    <TouchableOpacity style={style} {...props}>
      <Text tw={`uppercase bg-transparent`}>{children}</Text>
    </TouchableOpacity>
  );
};
