import React from 'react';
import { View as DefaultView, ViewProps } from 'react-native';

export function View(props: ViewProps) {
  const { style, ...otherProps } = props;

  return <DefaultView style={[style]} {...otherProps} />;
}
