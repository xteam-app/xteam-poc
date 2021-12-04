import React, { FC } from 'react';
import { Text as DefaultText, TextProps } from 'react-native';

export const Text: FC<TextProps> = ({ children, ...props }) => {
  return <DefaultText {...props}>{children}</DefaultText>;
};
