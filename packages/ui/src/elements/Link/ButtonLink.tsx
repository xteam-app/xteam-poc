import React, { FC } from 'react';
import { Button, Text } from '..';
import { BaseLink, BaseLinkProps } from './BaseLink';

export const ButtonLink: FC<BaseLinkProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};
