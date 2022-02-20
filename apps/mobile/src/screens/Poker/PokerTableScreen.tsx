import React, { FC } from 'react';
import { Container, Divider, FlexRow, Text, View } from '@xteam-app/ui';
import { PokerStackScreenProps } from '../../router/router';
import { Screen } from '../../router/routes';

export const PokerTableScreen: FC<PokerStackScreenProps<Screen.PokerTable>> = ({ route }) => {
  const {
    params: { card },
  } = route;

  return (
    <Container>
      <View tw="w-full flex-row justify-between">
        <Text tw={'font-medium'}>Team</Text>
        <Text tw={'font-medium'}>#123</Text>
      </View>
      <Divider />
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
    </Container>
  );
};
