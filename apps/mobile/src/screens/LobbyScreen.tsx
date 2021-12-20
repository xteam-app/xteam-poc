import React, { FC } from 'react';
import { BaseLayout, Caption, FlexCol, FlexRow, Text } from '@xteam-app/ui';
import { Link } from '../components/Link';

export const LobbyScreen: FC = () => {
  return (
    <BaseLayout>
      <FlexRow tw="items-baseline">
        <Caption>My Team</Caption>
        <Text>#123</Text>
      </FlexRow>
      <FlexCol tw="flex-1">
        <Link to="Home">Start</Link>
        <Link to="Lobby">Join</Link>
      </FlexCol>
    </BaseLayout>
  );
};
