import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BaseLayout } from '../layouts';
import { PokerGrid } from '../components';
import * as PokerGridStories from '../components/PokerGrid.stories';
import { Caption, Divider, Link, Row, Text } from '../elements';

export default {} as Meta;

const PokerDeck: Story = (args) => {
  return (
    <BaseLayout>
      <Row>
        <Caption>My Team</Caption>
        <Link to="https://example.com">#123</Link>
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

const PokerTable: Story = (args) => {
  return (
    <BaseLayout>
      <Row>
        <Caption>My Team</Caption>
        <Link to="https://example.com">#123</Link>
      </Row>
      <Row>
        <Text>John</Text>
        <Text>5</Text>
      </Row>
      <Row>
        <Text>Ann</Text>
        <Text>3</Text>
      </Row>
      <Divider />
      <Row>
        <Text>Total</Text>
        <Text>5</Text>
      </Row>
    </BaseLayout>
  );
};

export { PokerDeck, PokerTable };
