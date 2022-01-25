import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@xteam-app/ui';
import { Screen } from './consts';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PokerStackScreen } from './screens/Poker/PokerStackScreen';
import { DevModeScreen } from './screens/DevModeScreen';
import { RootStackParamList } from './router';

const Tab = createBottomTabNavigator<RootStackParamList>();

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator
          // tabBar={MyTabBar}
          initialRouteName={Screen.Poker}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen name={Screen.Poker} component={PokerStackScreen} />
          <Tab.Screen name={Screen.DevMode} component={DevModeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
