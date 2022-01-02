import React, { FC } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { tw as tailwind } from '../../utils/tailwind';
import { BaseProps } from '../../types';

export interface ButtonProps extends BaseProps, TouchableOpacityProps {}

export const BaseButton: FC<ButtonProps> = ({ tw, children, ...props }) => {
  const style = tailwind.style(tw);

  return (
    <TouchableOpacity style={style} {...props}>
      {children}
    </TouchableOpacity>
  );
};
