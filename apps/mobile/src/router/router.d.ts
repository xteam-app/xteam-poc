import { CardValue } from '@xteam-app/ui';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { Screen } from './routes';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  [Screen.Auth]: undefined;
  [Screen.HomeStack]: NavigatorScreenParams<HomeTabParamList>;
  [Screen.PokerStack]: NavigatorScreenParams<PokerStackParamList>;
  [Screen.TimerTab]: undefined;
  [Screen.NotFound]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;

export type HomeTabParamList = {
  [Screen.PokerTab]: undefined;
  [Screen.TimerTab]: undefined;
  [Screen.SettingsTab]: undefined;
  [Screen.DevMode]: undefined;
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

type PokerStackParamList = {
  [Screen.PokerDeck]: undefined;
  [Screen.PokerTable]: { title: string; card: CardValue };
};

export type PokerStackScreenProps<T extends keyof PokerStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<PokerStackParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    type RootParamList = RootStackParamList;
  }
}
