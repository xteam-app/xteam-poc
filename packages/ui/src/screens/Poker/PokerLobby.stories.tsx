import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Caption, Col, Link, Row, Text } from '../../elements';
import { BaseLayout } from '../../layouts';

export default {} as Meta;

const PokerLobby: Story = (args) => {
  return (
    <BaseLayout>
      <Row tw={'items-baseline'}>
        <Caption>My Team</Caption>
        <Text>#123</Text>
      </Row>
      <Col tw={'flex-1'}>
        <Link to="/start">Start</Link>
        <Link to="/join">Join</Link>
      </Col>
    </BaseLayout>
  );
};

export { PokerLobby };
