import React, { FC } from 'react';
import { View } from './View';

export const Divider: FC = () => {
  return (
    <View
      tw={`
        w-full my-4
        border border-gray-300 dark:border-gray-600
      `}
    />
  );
};
