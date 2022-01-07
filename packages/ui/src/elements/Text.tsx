import React, { FC } from 'react';
import { Text as DefaultText } from 'react-native';
import { BaseProps, ThemeSize } from '../types';
import { tw as tailwind } from '../utils/tailwind';
import { useTheme } from '../themes';

interface TextProps extends BaseProps {
  /** @deprecated */
  size?: ThemeSize;
}

export const Text: FC<TextProps> = ({ size, tw, children, ...props }) => {
  useTheme();
  let sizeStyle = '';
  if (size) {
    sizeStyle = `text-${size}`;
  }

  const style = tailwind.style('text-gray-900 dark:text-gray-100', sizeStyle, tw);

  return (
    <DefaultText style={style} {...props}>
      {children}
    </DefaultText>
  );
};
