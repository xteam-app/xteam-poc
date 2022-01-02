import React, { FC } from 'react';
import { ButtonProps } from '../Button';
import { BaseButton } from '../Button/BaseButton';

export type BaseLinkProps = ButtonProps;

export const BaseLink: FC<BaseLinkProps> = ({ children, ...props }) => {
  return <BaseButton {...props}>{children}</BaseButton>;
};
