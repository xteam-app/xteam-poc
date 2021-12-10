import React, { FC } from 'react';
import { View as DefaultView } from 'react-native';
import { useStyle } from '../utils/useStyle';
import { BaseProps } from '../types';

type IView = BaseProps;

export const View: FC<IView> = ({ tw, ...otherProps }) => {
  const style = useStyle(tw);
  return <DefaultView style={style} {...otherProps} />;
};
