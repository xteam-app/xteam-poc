import React, { FC } from 'react';
import { Link } from './Link';
import { Text } from '../Text';

export const ButtonLink: FC = ({ children }) => {
  return (
    <Text
      tw={`
        block w-42 h-12 mb-6
        flex justify-center items-center
        border-red-500 bg-black rounded
        uppercase text-lg font-bold bg-black
      `}
    >
      <Link to={'https://example.com'}>{children}</Link>
    </Text>
  );
};
