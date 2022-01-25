import React, { FC } from 'react';
import { Caption, Container, FlexCol, FlexRow, Text } from '@xteam-app/ui';
import { Link } from '../../components/Link';
import { Screen } from '../../consts';

export const PokerLobbyScreen: FC = () => {
  return (
    <Container>
      <FlexRow tw="items-baseline">
        <Caption>My Team</Caption>
        <Text>#123</Text>
      </FlexRow>
      <FlexCol tw="flex-1">
        <Link to={Screen.PokerDeck}>Start</Link>
        <Link to={Screen.PokerDeck}>Deck</Link>
        <Link to={Screen.DevMode}>Dev Mode</Link>
      </FlexCol>
    </Container>
  );
};
