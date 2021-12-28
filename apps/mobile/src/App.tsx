import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PokerDeckScreen } from './screens/PokerDeckScreen';
import { PokerLobbyScreen } from './screens/PokerLobbyScreen';
import { PokerTableScreen } from './screens/PokerTableScreen';
import { CardValue, ThemeProvider } from '@xteam-app/ui';
import { Screen } from './consts';

export type RootStackParamList = {
  [Screen.PokerLobby]: undefined;
  [Screen.PokerDeck]: undefined;
  [Screen.PokerTable]: { title: string; card: CardValue };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Screen.PokerLobby}
          screenOptions={{
            headerStyle: {
              backgroundColor: 'red',
            },
          }}
        >
          <Stack.Group>
            <Stack.Screen
              name={Screen.PokerLobby}
              component={PokerLobbyScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={Screen.PokerDeck}
              component={PokerDeckScreen}
              options={{ title: 'My Team', headerShown: true }}
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
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
