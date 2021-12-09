import React, { FC } from 'react';
import { Text, View } from '../../elements';

export const Caption: FC = ({ children }) => {
  return (
    <View tw="mb-4">
      <Text tw="text-2xl font-bold">{children}</Text>
    </View>
  );
};
