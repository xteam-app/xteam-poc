import React, { FC } from 'react';
import { ILink, Link } from './Link';
import { Text } from '../Text';

export const ShareLink: FC<ILink> = ({ children, ...props }) => {
  return (
    <Text tw={`text-base font-normal underline`}>
      <Link {...props}>{children}</Link>
    </Text>
  );
};
