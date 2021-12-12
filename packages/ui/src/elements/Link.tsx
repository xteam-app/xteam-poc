import React, { FC } from 'react';
import { Text } from './Text';
import { View } from './View';

export interface ILink {
  to: string;
}

export const Link: FC<ILink> = ({ to, children }) => {
  return (
    <View
      tw={`
        w-42 h-12 mb-6
        flex justify-center items-center
        border-red-500 bg-black rounded
      `}
    >
      <Text tw="uppercase text-lg font-bold bg-black">{children}</Text>
    </View>
  );
};
