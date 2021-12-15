import React, { FC } from 'react';
import { Text } from '../Text';

export interface ILink {
  to: string;
}

export const Link: FC<ILink> = ({ to, children }) => {
  console.log(to);
  return <Text>{children}</Text>;
};
