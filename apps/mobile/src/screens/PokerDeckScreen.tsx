import React, { FC } from 'react';
import { Caption, Container, FlexRow, PokerGrid, Text } from '@xteam-app/ui';
import { Screen } from '../consts';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ScreenProps = NativeStackScreenProps<RootStackParamList, Screen.PokerDeck>;

export const PokerDeckScreen: FC<ScreenProps> = ({ navigation }) => {
  return (
    <Container>
      <FlexRow tw={'items-baseline'}>
        <Caption>My Team</Caption>
        <Text>#123</Text>
      </FlexRow>
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
