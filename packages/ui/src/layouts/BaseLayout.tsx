import React, { FC } from 'react';
import { View } from '../elements';
import { SafeAreaView, StatusBar } from 'react-native';
import { useTheme } from '../themes';
import { tw } from '../utils/tailwind';

export const BaseLayout: FC = ({ children }) => {
  const { isDarkMode } = useTheme();

  return (
    <SafeAreaView style={tw`bg-white dark:bg-gray-800`}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        tw={`
          h-full px-6 py-6
        `}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};
