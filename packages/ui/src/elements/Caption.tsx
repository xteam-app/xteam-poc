import React, { FC } from 'react';
import { Text, View } from '@elements';

const Caption: FC = ({ children }) => {
  return (
    <View tw={'mt-6 mb-4'}>
      <Text tw={`text-xl font-bold uppercase`}>{children}</Text>
    </View>
  );
};

export { Caption };
