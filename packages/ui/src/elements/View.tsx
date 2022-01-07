import React, { FC } from 'react';
import { View as DefaultView } from 'react-native';
import { BaseProps } from '../types';
import { tw as tailwind } from '../utils/tailwind';
import { useTheme } from '../themes';

type ViewProps = BaseProps;

export const View: FC<ViewProps> = ({ tw, ...otherProps }) => {
  useTheme();
  const style = tailwind.style('bg-white dark:bg-gray-800', tw);

  return <DefaultView style={style} {...otherProps} />;
};
