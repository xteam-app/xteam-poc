import React, { FC } from 'react';
import { SwitchMode, Text } from '@xteam-app/ui';
import { PokerDeckScreen } from '../screens/Poker/PokerDeckScreen';
import { PokerTableScreen } from '../screens/Poker/PokerTableScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PokerStackParamList, RootStackParamList } from './router';
import { Screen } from './routes';
import { StackScreenProps } from '@react-navigation/stack';

type ScreenProps = StackScreenProps<RootStackParamList, Screen.PokerStack>;

const PokerStack = createNativeStackNavigator<PokerStackParamList>();

export const PokerStackScreen: FC<ScreenProps> = ({ navigation, route }) => {
  return (
    <PokerStack.Navigator
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
      <PokerStack.Group screenOptions={{ headerRight: () => <SwitchMode /> }}>
        <PokerStack.Screen
          name={Screen.PokerDeck}
          component={PokerDeckScreen}
          options={{
            title: 'My Team',
            headerRight: () => <Text>#123</Text>,
          }}
        />
      </PokerStack.Group>

      <PokerStack.Group screenOptions={{ presentation: 'modal' }}>
        <PokerStack.Screen
          name={Screen.PokerTable}
          component={PokerTableScreen}
          options={({ route }) => ({ title: route.params.title })}
        />
      </PokerStack.Group>
    </PokerStack.Navigator>
  );
};
