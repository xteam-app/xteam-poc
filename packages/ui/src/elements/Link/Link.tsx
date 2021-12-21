import React, { FC } from 'react';
import { Button, ButtonProps } from '../Button';

export type BaseLinkProps = ButtonProps;

export const Link: FC<BaseLinkProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};
