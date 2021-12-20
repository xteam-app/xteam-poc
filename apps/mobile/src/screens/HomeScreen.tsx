import React, { FC } from 'react';
import { BaseLayout, Caption, FlexRow, PokerGrid, Text } from '@xteam-app/ui';
import { Alert } from 'react-native';

export const HomeScreen: FC = () => {
  return (
    <BaseLayout>
      <FlexRow tw={'items-baseline'}>
        <Caption>My Team</Caption>
        <Text>#123</Text>
      </FlexRow>
      <PokerGrid onClick={(item) => Alert.alert(item.toString())} />
    </BaseLayout>
  );
};
