import React, { FC } from 'react';
import { BaseLayout, Caption, FlexCol, FlexRow, SwitchMode, Text } from '@xteam-app/ui';
import { Link } from '../components/Link';
import { Screen } from '../consts';

export const PokerLobbyScreen: FC = () => {
  return (
    <BaseLayout>
      <FlexRow tw="items-baseline">
        <Caption>My Team</Caption>
        <Text>#123</Text>
      </FlexRow>
      <FlexCol tw="flex-1">
        <SwitchMode />
        <Link to={Screen.PokerDeck}>Start</Link>
        <Link to={Screen.PokerDeck}>Join</Link>
      </FlexCol>
    </BaseLayout>
  );
};
