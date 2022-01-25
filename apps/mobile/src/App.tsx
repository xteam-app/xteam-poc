import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@xteam-app/ui';
import { Screen } from './consts';
import { DevModeScreen } from './screens/DevModeScreen';
import { RootStackParamList } from './router';
import { InvoicesScreen } from './screens/Invoices/InvoicesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CostsAddFinishScreen } from './screens/Costs/CostsAddFinishScreen';
import { MainStackScreen } from './screens/MainStackScreen';
import { CostsStack } from './screens/Costs/CostsStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          // tabBar={MyTabBar}
          screenOptions={{ headerShown: true }}
        >
          <Stack.Screen name={Screen.Main} component={MainStackScreen} options={{ headerShown: true }} />
          <Stack.Group>
            <Stack.Screen name={Screen.Costs} component={CostsStack} />
            <Stack.Screen name={Screen.Invoices} component={InvoicesScreen} />
            <Stack.Screen name={Screen.DevMode} component={DevModeScreen} />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name={Screen.CostsAddFinish} component={CostsAddFinishScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
