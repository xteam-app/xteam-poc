import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Caption, FlexCol, Link, FlexRow, Text } from '../../elements';
import { BaseLayout } from '../../layouts';

export default {} as Meta;

const PokerLobby: Story = (args) => {
  return (
    <BaseLayout>
      <FlexRow tw={'items-baseline'}>
        <Caption>My Team</Caption>
        <Text>#123</Text>
      </FlexRow>
      <FlexCol tw={'flex-1'}>
        <Link to="/start">Start</Link>
        <Link to="/join">Join</Link>
      </FlexCol>
    </BaseLayout>
  );
};

export { PokerLobby };
