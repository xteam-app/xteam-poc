import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@xteam-app/ui';
import { Screen } from './router/routes';
import { RootStackParamList } from './router/router';
import { PokerStackScreen } from './router/PokerStackScreen';
import { TabsStack } from './router/TabsStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerBackTitleVisible: false,
            headerBackVisible: true,
          }}
        >
          <RootStack.Screen name={Screen.HomeStack} component={TabsStack} />
          <RootStack.Screen name={Screen.PokerStack} component={PokerStackScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
