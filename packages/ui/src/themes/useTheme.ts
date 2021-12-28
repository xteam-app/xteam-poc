import { useContext } from 'react';
import { Theme, ThemeContext } from './ThemeProvider';
import { tw } from '../utils/tailwind';
import { useAppColorScheme } from 'twrnc';

// const defaultColors = {
//   dark: {
//     text: tw`text-gray-100`,
//     bg: tw`bg-gray-800`,
//     border: tw`border-gray-300`,
//   },
//   light: {
//     text: tw`text-gray-900`,
//     bg: tw`bg-white`,
//     border: tw`border-gray-900`,
//   },
// };

export const useTheme = (): Theme => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('This component cannot be rendered outside the ThemeProvider component');
  }

  return context;
};
