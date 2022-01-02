import React, { FC } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useTheme } from '../themes';
import { tw as tailwind } from '../utils/tailwind';
import { BaseProps } from '../types';

export const BaseLayout: FC<BaseProps> = ({ children }) => {
  const { isDarkMode } = useTheme();

  return (
    <SafeAreaView style={tailwind`bg-white dark:bg-gray-800`}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {children}
    </SafeAreaView>
  );
};
