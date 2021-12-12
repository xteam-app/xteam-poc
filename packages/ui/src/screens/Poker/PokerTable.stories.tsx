import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BaseLayout } from '../../layouts';
import { Caption, Divider, Row, Text } from '../../elements';

export default {} as Meta;

const PokerTable: Story = (args) => {
  return (
    <BaseLayout>
      <Row tw={'items-baseline'}>
        <Caption>My Team</Caption>
        <Text>#123</Text>
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

export { PokerTable };
