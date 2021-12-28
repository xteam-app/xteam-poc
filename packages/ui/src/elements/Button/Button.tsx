import React, { FC } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { BaseProps } from '../../types';
import { Text } from '..';
import { useTheme } from '../../themes';

import { tw as tailwind } from '../../utils/tailwind';

export interface ButtonProps extends BaseProps, TouchableOpacityProps {}

export const Button: FC<ButtonProps> = ({ tw, children, ...props }) => {
  useTheme();
  const style = tailwind.style('bg-red-700 dark:bg-red-500', tw);

  return (
    <TouchableOpacity style={style} {...props}>
      <Text tw={`uppercase bg-transparent text-white`}>{children}</Text>
    </TouchableOpacity>
  );
};
