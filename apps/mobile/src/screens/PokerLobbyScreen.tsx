import React, { FC } from 'react';
import { BaseLayout, Caption, FlexCol, FlexRow, Text } from '@xteam-app/ui';
import { Link } from '../components/Link';
import { Routes } from '../consts';

export const PokerLobbyScreen: FC = () => {
  return (
    <BaseLayout>
      <FlexRow tw="items-baseline">
        <Caption>My Team</Caption>
        <Text>#123</Text>
      </FlexRow>
      <FlexCol tw="flex-1">
        <Link to={Routes.PokerDeck}>Start</Link>
        <Link to={Routes.PokerDeck}>Join</Link>
      </FlexCol>
    </BaseLayout>
  );
};
