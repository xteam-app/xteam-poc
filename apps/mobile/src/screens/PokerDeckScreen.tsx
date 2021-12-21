import React, { FC } from 'react';
import { BaseLayout, Caption, FlexRow, PokerGrid, Text } from '@xteam-app/ui';
import { Routes } from '../consts';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ScreenProps = NativeStackScreenProps<RootStackParamList, Routes.PokerDeck>;

export const PokerDeckScreen: FC<ScreenProps> = ({ navigation }) => {
  return (
    <BaseLayout>
      <FlexRow tw={'items-baseline'}>
        <Caption>My Team</Caption>
        <Text>#123</Text>
      </FlexRow>
      <PokerGrid
        onClick={(card) =>
          navigation.navigate(Routes.PokerTable, {
            title: 'Table',
            card,
          })
        }
      />
    </BaseLayout>
  );
};
