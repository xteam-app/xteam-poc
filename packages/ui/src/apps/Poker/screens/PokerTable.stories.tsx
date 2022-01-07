import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Container } from '../../../layouts';
import { Caption, Divider, FlexRow, Text, View } from '../../../elements';

export default {} as Meta;

const PokerTable: Story = (args) => {
  return (
    <Container>
      <FlexRow tw={'items-baseline'}>
        <Caption>My Team</Caption>
        <Text>#123</Text>
      </FlexRow>
      <FlexRow>
        <Text>John</Text>
        <Text>5</Text>
      </FlexRow>
      <FlexRow>
        <Text>Ann</Text>
        <Text>3</Text>
      </FlexRow>
      <Divider />
      <FlexRow>
        <Text>Total</Text>
        <Text>5</Text>
      </FlexRow>
    </Container>
  );
};

export { PokerTable };
