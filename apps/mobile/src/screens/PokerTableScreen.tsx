import React, { FC } from 'react';
import { BaseLayout, Caption, Divider, FlexRow, Text } from '@xteam-app/ui';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Screen } from '../consts';

type ScreenProps = NativeStackScreenProps<RootStackParamList, Screen.PokerTable>;

export const PokerTableScreen: FC<ScreenProps> = ({
  route: {
    params: { card },
  },
}) => {
  return (
    <BaseLayout>
      <FlexRow tw="items-baseline">
        <Caption>My Team</Caption>
        <Text>#123</Text>
      </FlexRow>
      <FlexRow>
        <Text tw={'font-bold'}>You</Text>
        <Text tw={'font-bold'}>{card}</Text>
      </FlexRow>
      <FlexRow>
        <Text>John</Text>
        <Text>5</Text>
      </FlexRow>
      <FlexRow>
        <Text>Ann</Text>
        <Text>3</Text>
      </FlexRow>
      <Divider />
      <FlexRow>
        <Text>Total</Text>
        <Text>5</Text>
      </FlexRow>
    </BaseLayout>
  );
};
