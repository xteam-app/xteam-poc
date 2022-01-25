import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@xteam-app/ui';
import { Screen } from './consts';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DevModeScreen } from './screens/DevModeScreen';
import { RootStackParamList } from './router';
import { DashboardScreen } from './screens/Dashboard/DashboardScreen';
import { CostsStack } from './screens/Costs/CostsStack';
import { InvoicesScreen } from './screens/Invoices/InvoicesScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator
          // tabBar={MyTabBar}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen name={Screen.Dashboard} component={DashboardScreen} />
          <Tab.Screen name={Screen.Costs} component={CostsStack} />
          <Tab.Screen name={Screen.Invoices} component={InvoicesScreen} />
          <Tab.Screen name={Screen.DevMode} component={DevModeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
