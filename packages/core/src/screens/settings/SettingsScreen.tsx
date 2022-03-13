import React, { FC } from 'react';
import { HomeTabScreenProps } from '../../router/router';
import { Screen } from '../../router/routes';
import { Button, Caption, Container, FlexRow, Text } from '@xteam-app/ui';

export const SettingsScreen: FC<HomeTabScreenProps<Screen.SettingsTab>> = ({ navigation }) => {
  return (
    <Container>
      <Caption>Settings caption</Caption>
      <FlexRow>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis dolore doloribus eum id
          mollitia neque nisi nobis, nostrum odit quaerat quis, quod quos sequi tempore unde veniam vitae voluptas!
        </Text>
      </FlexRow>
      <Button>Ok</Button>
      <Button onPress={() => navigation.jumpTo(Screen.PokerTab)}>Poker</Button>
      <Button onPress={() => navigation.push(Screen.PokerStack, { screen: Screen.PokerDeck })}>Poker Deck</Button>
    </Container>
  );
};
