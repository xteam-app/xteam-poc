import React, { FC } from 'react';
import { View } from './View';
import { BaseProps } from '../types';

export const FlexCol: FC<BaseProps> = ({ tw, children }) => {
  const baseStyles = `
    flex-col items-center
    max-w-full h-full
  `;
  const styles = [baseStyles];
  if (tw) {
    styles.push(tw as string);
  }
  return <View tw={styles}>{children}</View>;
};
