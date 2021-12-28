import React, { FC } from 'react';
import { Text } from '../Text';
import { BaseLink, BaseLinkProps } from './BaseLink';

export const ShareLink: FC<BaseLinkProps> = ({ children, ...props }) => {
  return (
    <BaseLink {...props}>
      <Text tw={`text-base font-normal underline`}>{children}</Text>
    </BaseLink>
  );
};
