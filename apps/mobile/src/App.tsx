import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PokerDeckScreen } from './screens/PokerDeckScreen';
import { PokerLobbyScreen } from './screens/PokerLobbyScreen';
import { PokerTableScreen } from './screens/PokerTableScreen';
import { CardValue } from '@xteam-app/ui';
import { Routes } from './consts';

export type RootStackParamList = {
  [Routes.PokerLobby]: undefined;
  [Routes.PokerDeck]: undefined;
  [Routes.PokerTable]: { title: string; card: CardValue };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.PokerLobby}>
        <Stack.Group>
          <Stack.Screen name={Routes.PokerLobby} component={PokerLobbyScreen} />
          <Stack.Screen
            name={Routes.PokerDeck}
            component={PokerDeckScreen}
            options={{ title: 'My Team', headerShown: true }}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name={Routes.PokerTable}
            component={PokerTableScreen}
            options={({ route }) => ({ title: route.params.title })}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
