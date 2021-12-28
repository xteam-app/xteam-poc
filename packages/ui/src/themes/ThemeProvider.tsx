import React, { createContext, FC } from 'react';
import { useAppColorScheme, useDeviceContext } from 'twrnc';
import { tw } from '../utils/tailwind';
import { RnColorScheme } from 'twrnc/dist/esm/types';
import { Text } from 'react-native';

export interface Theme {
  colorScheme: RnColorScheme;
  isDarkMode: boolean;
  toggleColorScheme: () => void;
  setColorScheme: (colorScheme: RnColorScheme) => void;
}

export const ThemeContext = createContext<Theme | undefined>(undefined);

export const ThemeProvider: FC = ({ children }) => {
  useDeviceContext(tw, { withDeviceColorScheme: false });

  const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw, 'light');
  const value = {
    colorScheme,
    isDarkMode: colorScheme === 'dark',
    toggleColorScheme,
    setColorScheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};