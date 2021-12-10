import React, { FC } from 'react';
import { Pressable, PressableProps } from 'react-native';
import { useStyle } from '../utils/useStyle';
import { BaseProps } from '../types';

interface ButtonProps extends BaseProps, Pick<PressableProps, 'onPress'> {}

export const Button: FC<ButtonProps> = ({ tw, children, ...props }) => {
  const style = useStyle(tw);
  return (
    <Pressable style={style} {...props}>
      {children}
    </Pressable>
  );
};
