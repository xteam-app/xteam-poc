import React, { FC } from 'react';
import { Caption, Container, PokerGrid } from '@xteam-app/ui';
import { PokerStackScreenProps } from '../../router/router';
import { Screen } from '../../router/routes';

export const PokerDeckScreen: FC<PokerStackScreenProps<Screen.PokerDeck>> = ({ navigation }) => {
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
