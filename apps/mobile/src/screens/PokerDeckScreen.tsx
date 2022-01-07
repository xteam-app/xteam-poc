import React, { FC } from 'react';
import { Caption, Container, PokerGrid } from '@xteam-app/ui';
import { Screen } from '../consts';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ScreenProps = NativeStackScreenProps<RootStackParamList, Screen.PokerDeck>;

export const PokerDeckScreen: FC<ScreenProps> = ({ navigation }) => {
  return (
    <Container>
      <Caption>Deck</Caption>
      <PokerGrid
        onClick={(card) =>
          navigation.navigate(Screen.PokerTable, {
            title: 'Table',
            card,
          })
        }
      />
    </Container>
  );
};
