import { Meta, Story } from '@storybook/react';
import { Caption, Row, Text } from '../../elements';
import { PokerGrid } from '../../components';
import * as PokerGridStories from '../../components/PokerGrid.stories';
import { BaseLayout } from '../../layouts';
import React from 'react';

export default {} as Meta;

const PokerDeck: Story = (args) => {
  return (
    <BaseLayout>
      <Row tw={'items-baseline'}>
        <Caption>My Team</Caption>
        <Text>#123</Text>
      </Row>
      <PokerGrid
        {...PokerGridStories.Default.args}
        onClick={(item) => {
          console.log(`onClick ${item}`);
        }}
      />
    </BaseLayout>
  );
};

export { PokerDeck };
