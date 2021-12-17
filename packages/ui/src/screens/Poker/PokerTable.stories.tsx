import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BaseLayout } from '../../layouts';
import { Caption, Divider, FlexRow, Text } from '../../elements';

export default {} as Meta;

const PokerTable: Story = (args) => {
  return (
    <BaseLayout>
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
    </BaseLayout>
  );
};

export { PokerTable };
