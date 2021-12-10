import React, { FC } from 'react';
import { View } from '../elements';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { useStyle } from '../utils/useStyle';

export const BaseLayout: FC = ({ children }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = useStyle('bg-white dark:bg-black');

  return (
    <SafeAreaView style={styles}>
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
