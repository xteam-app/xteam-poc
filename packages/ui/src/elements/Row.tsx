import React, { FC } from 'react';
import { View } from './View';
import { BaseProps } from '../types';

export const Row: FC<BaseProps> = ({ tw, children }) => {
  const baseStyles = `
    flex-row justify-between items-baseline
    mb-4
  `;
  const styles = [baseStyles];
  if (tw) {
    styles.push(tw as string);
  }
  return <View tw={styles}>{children}</View>;
};
