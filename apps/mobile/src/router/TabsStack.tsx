import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTabParamList } from './router';
import { Screen } from './routes';
import React, { FC } from 'react';
import { PokerLobbyScreen } from '../screens/Poker/PokerLobbyScreen';
import { TimerScreen } from '../screens/timer/TimerScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';

const Tabs = createBottomTabNavigator<HomeTabParamList>();

export const TabsStack: FC = () => {
  return (
    <Tabs.Navigator initialRouteName={Screen.PokerTab}>
      <Tabs.Screen name={Screen.PokerTab} component={PokerLobbyScreen} />
      <Tabs.Screen name={Screen.TimerTab} component={TimerScreen} />
      <Tabs.Screen name={Screen.SettingsTab} component={SettingsScreen} />
      {/*<Tabs.Screen name={Screen.DevMode} component={DevModeScreen} />*/}
    </Tabs.Navigator>
  );
};
