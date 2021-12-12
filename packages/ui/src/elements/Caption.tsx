import React, { FC } from 'react';
import { Text } from './Text';
import { View } from './View';

export const Caption: FC = ({ children }) => {
  let styles = 'font-bold';
  if (React.Children.count(children) > 1) {
    styles = styles.concat(' flex flex-col');
  }
  return (
    <View tw={'mb-4'}>
      <Text size={'2xl'} tw={styles}>
        {children}
      </Text>
    </View>
  );
};
