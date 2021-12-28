import React, { FC } from 'react';
import { BaseLink, BaseLinkProps } from './BaseLink';

export const Link: FC<BaseLinkProps> = ({ children, ...props }) => {
  return <BaseLink {...props}>{children}</BaseLink>;
};
