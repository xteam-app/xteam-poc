import { useColorScheme } from 'react-native';
import tw from 'twrnc';
import { Style } from 'twrnc/dist/esm/types';

interface Theme {
  text: Style;
  bg: Style;
  border: Style;
}
export const useTheme = (): Theme => {
  const isDarkMode = useColorScheme() === 'dark';

  if (isDarkMode) {
    return {
      text: tw`text-gray-100`,
      bg: tw`bg-gray-800`,
      border: tw`border-gray-300`,
    };
  }

  return {
    text: tw`text-gray-900`,
    bg: tw`bg-white`,
    border: tw`border-gray-900`,
  };
};
