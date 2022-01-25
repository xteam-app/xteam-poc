import { Screen } from './consts';
import { CardValue } from '@xteam-app/ui';
import { NavigatorScreenParams } from '@react-navigation/native';

export type PokerStackParamList = {
  [Screen.PokerLobby]: undefined;
  [Screen.PokerDeck]: undefined;
  [Screen.PokerTable]: { title: string; card: CardValue };
};

export type RootStackParamList = {
  [Screen.Poker]: NavigatorScreenParams<PokerStackParamList>;
  [Screen.Auth]: undefined;
  [Screen.DevMode]: undefined;
};
