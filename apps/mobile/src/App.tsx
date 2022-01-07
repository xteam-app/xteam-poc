import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PokerDeckScreen } from './screens/PokerDeckScreen';
import { PokerLobbyScreen } from './screens/PokerLobbyScreen';
import { PokerTableScreen } from './screens/PokerTableScreen';
import { CardValue, SwitchMode, ThemeProvider } from '@xteam-app/ui';
import { Screen } from './consts';
import { DevMode } from './screens/DevMode';

export type RootStackParamList = {
  [Screen.PokerLobby]: undefined;
  [Screen.PokerDeck]: undefined;
  [Screen.PokerTable]: { title: string; card: CardValue };
  [Screen.DevMode]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Screen.PokerLobby}
          screenOptions={{
            headerRight: () => <SwitchMode />,
          }}
        >
          <Stack.Group>
            <Stack.Screen
              name={Screen.PokerLobby}
              component={PokerLobbyScreen}
              options={{
                headerShown: true,
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
          <Stack.Group>
            <Stack.Screen name={Screen.DevMode} component={DevMode} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
