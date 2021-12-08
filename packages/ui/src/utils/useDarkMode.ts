import { useColorScheme } from 'react-native';
import tw from 'twrnc';

export const useDarkMode = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return {
    text: tw.style(isDarkMode ? 'text-gray-100' : 'text-gray-900'),
  };
};
