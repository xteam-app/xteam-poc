import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Container } from '../../../layouts';
import { Divider, FlexRow, Text, View } from '../../../elements';

export default {} as Meta;

const PokerTable: Story = (args) => {
  return (
    <Container>
      <View tw="w-full flex-row justify-between">
        <Text tw={'font-medium'}>Team</Text>
        <Text tw={'font-medium'}>#123</Text>
      </View>
      <Divider />
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
