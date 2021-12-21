import React, { FC } from 'react';
import { Pressable, PressableProps } from 'react-native';
import { useStyle } from '../utils/useStyle';
import { BaseProps } from '../types';
import { Text } from '.';

export interface ButtonProps extends BaseProps, PressableProps {}

export const Button: FC<ButtonProps> = ({ tw, children, ...props }) => {
  const style = useStyle(tw);

  return (
    <Pressable style={style} {...props}>
      <Text tw={`uppercase bg-transparent`}>{children}</Text>
    </Pressable>
  );
};
