import React, { FC, useLayoutEffect } from 'react';
import { Screen } from '../../consts';
import { SwitchMode, Text } from '@xteam-app/ui';
import { PokerLobbyScreen } from './PokerLobbyScreen';
import { PokerDeckScreen } from './PokerDeckScreen';
import { PokerTableScreen } from './PokerTableScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { PokerStackParamList, RootStackParamList } from '../../router';

type ScreenProps = BottomTabScreenProps<RootStackParamList, Screen.Poker>;

const getTabBarVisibility = (route: ScreenProps['route']) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? Screen.PokerLobby;
  return routeName === Screen.PokerLobby;
};

const Stack = createNativeStackNavigator<PokerStackParamList>();

export const PokerStackScreen: FC<ScreenProps> = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarStyle: {
        display: getTabBarVisibility(route) ? 'flex' : 'none',
      },
    });
  }, [navigation, route]);

  return (
    <Stack.Navigator
      initialRouteName={Screen.PokerLobby}
      screenOptions={{
        headerBackTitleVisible: false,
        headerTransparent: true,
        headerBackVisible: true,
        headerTitle: ({ children, ...props }) => (
          <Text tw={`uppercase font-bold`} {...props}>
            {children}
          </Text>
        ),
      }}
    >
      <Stack.Group screenOptions={{ headerRight: () => <SwitchMode /> }}>
        <Stack.Screen
          name={Screen.PokerLobby}
          component={PokerLobbyScreen}
          options={{
            title: 'Lobby',
          }}
        />
        <Stack.Screen
          name={Screen.PokerDeck}
          component={PokerDeckScreen}
          options={{
            title: 'My Team',
            headerRight: () => <Text>#123</Text>,
          }}
        />
      </Stack.Group>

      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name={Screen.PokerTable}
          component={PokerTableScreen}
          options={({ route }) => ({ title: route.params.title })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
