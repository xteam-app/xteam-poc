import React, { FC } from 'react';
import { Text as DefaultText } from 'react-native';
import { useStyle } from '../utils/useStyle';
import { BaseProps, ThemeSize } from '../types';

interface TextProps extends BaseProps {
  /** @deprecated */
  size?: ThemeSize;
}

export const Text: FC<TextProps> = ({ size, tw, children, ...props }) => {
  let sizeStyle = '';
  if (size) {
    sizeStyle = `text-${size}`;
  }

  const style = useStyle(sizeStyle ? `${tw} ${sizeStyle}` : tw);

  return (
    <DefaultText style={style} {...props}>
      {children}
    </DefaultText>
  );
};
