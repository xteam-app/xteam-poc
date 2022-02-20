import React, { FC } from 'react';
import { Button, Caption, Container, FlexCol, FlexRow, Text } from '@xteam-app/ui';
import { Screen } from '../../router/routes';
import { HomeTabScreenProps } from '../../router/router';

export const PokerLobbyScreen: FC<HomeTabScreenProps<Screen.PokerTab>> = ({ navigation }) => {
  return (
    <Container>
      <FlexRow tw="items-baseline">
        <Caption>My Team</Caption>
        <Text>#123</Text>
      </FlexRow>
      <FlexCol tw="flex-1">
        <Button
          onPress={() =>
            navigation.push(Screen.PokerStack, {
              screen: Screen.PokerDeck,
            })
          }
        >
          Start
        </Button>
      </FlexCol>
    </Container>
  );
};
