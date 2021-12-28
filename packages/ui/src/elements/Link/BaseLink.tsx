import React, { FC } from 'react';
import { Button, ButtonProps } from '../Button';

export type BaseLinkProps = ButtonProps;

export const BaseLink: FC<BaseLinkProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};
