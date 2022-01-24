import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@xteam-app/ui';
import { Screen } from './consts';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackScreen } from './screens/Home/HomeStackScreen';
import { DevModeScreen } from './screens/DevModeScreen';

export type RootStackParamList = {
  [Screen.Home]: undefined;
  [Screen.Auth]: undefined;
  [Screen.DevMode]: undefined;
};

const getTabBarVisibility = (route: any) => {
  const routeName = route.state ? route.state.routes[route.state.index].name : '';

  console.log({ route });
  console.log({ routeName });
  if (routeName === Screen.PokerDeck) {
    return false;
  }

  return true;
};

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

function getHeaderTitle(route: any) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case Screen.PokerLobby:
      return 'Lobby';
    case Screen.PokerDeck:
      return 'Deck';
    case 'Account':
      return 'My account';
  }
}

const getTabBarVisability = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? Screen.PokerLobby;

  if (routeName === Screen.PokerLobby) {
    return 'flex';
  }

  return 'none';
};

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={Screen.Home}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen
            name={Screen.Home}
            component={HomeStackScreen}
            options={({ route }) => ({
              headerTitle: getHeaderTitle(route),
              tabBarStyle: { display: getTabBarVisability(route) },
            })}
          />
          <Tab.Screen name={Screen.DevMode} component={DevModeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
