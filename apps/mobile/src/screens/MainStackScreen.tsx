import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStackParamList } from '../router';
import { Screen } from '../consts';
import { DashboardScreen } from './Dashboard/DashboardScreen';
import { DevModeScreen } from './DevModeScreen';
import { InvoicesScreen } from './Invoices/InvoicesScreen';
import { CostsListScreen } from './Costs/CostsListScreen';

const Tab = createBottomTabNavigator<MainStackParamList>();

export const MainStackScreen: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={Screen.MainDashboard} component={DashboardScreen} />
      <Tab.Screen name={Screen.MainCosts} component={CostsListScreen} />
      <Tab.Screen name={Screen.MainInvoices} component={InvoicesScreen} />
      <Tab.Screen name={Screen.MainDevMode} component={DevModeScreen} />
    </Tab.Navigator>
  );
};
