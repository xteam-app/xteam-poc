import React from 'react';
import { Alert, SafeAreaView, ScrollView, StatusBar, useColorScheme } from 'react-native';

import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import { PokerGrid, View } from '@xteam-app/ui';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View tw={'h-full'}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <PokerGrid
              onClick={(card) => {
                Alert.alert(card.toString());
              }}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;
