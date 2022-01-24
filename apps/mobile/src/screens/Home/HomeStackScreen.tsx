import React, { FC } from 'react';
import { Screen } from '../../consts';
import { CardValue, SwitchMode, Text } from '@xteam-app/ui';
import { PokerLobbyScreen } from '../PokerLobbyScreen';
import { PokerDeckScreen } from '../PokerDeckScreen';
import { PokerTableScreen } from '../PokerTableScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type PokerStackParamList = {
  [Screen.PokerLobby]: undefined;
  [Screen.PokerDeck]: undefined;
  [Screen.PokerTable]: { title: string; card: CardValue };
};

const Stack = createNativeStackNavigator<PokerStackParamList>();

export const HomeStackScreen: FC = () => {
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
      <Stack.Group
        screenOptions={{
          headerRight: () => <SwitchMode />,
        }}
      >
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
