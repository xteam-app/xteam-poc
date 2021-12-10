import React, { FC } from 'react';
import { Text as DefaultText } from 'react-native';
import { useStyle } from '../utils/useStyle';
import { BaseProps } from '../types';

export const Text: FC<BaseProps> = ({ tw, children, ...props }) => {
  const style = useStyle(tw);

  return (
    <DefaultText style={style} {...props}>
      {children}
    </DefaultText>
  );
};
