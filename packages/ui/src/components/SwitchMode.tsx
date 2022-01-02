import React, { FC } from 'react';
import { useTheme } from '../themes';
import { Button } from '../elements';

export const SwitchMode: FC = () => {
  const { colorScheme, toggleColorScheme } = useTheme();
  return <Button onPress={toggleColorScheme}>{colorScheme}</Button>;
};
