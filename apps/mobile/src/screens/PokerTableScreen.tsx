import React, { FC } from 'react';
import { Caption, Container, Divider, FlexRow, Text, View } from '@xteam-app/ui';
import { PokerStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Screen } from '../consts';

type ScreenProps = NativeStackScreenProps<PokerStackParamList, Screen.PokerTable>;

export const PokerTableScreen: FC<ScreenProps> = ({
  route: {
    params: { card },
  },
}) => {
  return (
    <Container>
      <View tw="w-full flex-row justify-between">
        <Text tw={'font-medium'}>Team</Text>
        <Text tw={'font-medium'}>#123</Text>
      </View>
      <Divider></Divider>
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
