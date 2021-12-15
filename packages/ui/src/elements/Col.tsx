import React, { FC } from 'react';
import { View } from './View';
import { BaseProps } from '../types';

export const Col: FC<BaseProps> = ({ tw, children }) => {
  const baseStyles = `
    flex-col justify-center items-center
    h-full
  `;
  const styles = [baseStyles];
  if (tw) {
    styles.push(tw as string);
  }
  return <View tw={styles}>{children}</View>;
};
