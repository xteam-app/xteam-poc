import React from 'react';
import { View as DefaultView, ViewProps } from 'react-native';
import { Text } from '../Text';

export function View(props: ViewProps) {
  const { style, ...otherProps } = props;

  return (
    <DefaultView>
      <Text>native</Text>
      <DefaultView style={[style]} {...otherProps} />
    </DefaultView>
  );
}
