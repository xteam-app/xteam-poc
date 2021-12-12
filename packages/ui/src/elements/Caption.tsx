import React, { FC } from 'react';
import { Text } from './Text';

export const Caption: FC = ({ children }) => {
  let styles = 'mb-4 font-bold';
  if (React.Children.count(children) > 1) {
    styles = styles.concat(' flex flex-col');
  }
  return (
    <Text size={'2xl'} tw={styles}>
      {children}
    </Text>
  );
};
