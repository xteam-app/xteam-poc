import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Caption, FlexCol, FlexRow, Text } from '../../../elements';
import { Container } from '../../../layouts';

export default {} as Meta;

const onClick = () => {
  console.log('click');
};

const PokerLobby: Story = (args) => {
  return (
    <Container>
      <FlexRow tw={'items-baseline'}>
        <Caption>My Team</Caption>
        <Text>#123</Text>
      </FlexRow>
      <FlexCol tw={'flex-1'}>
        <Button onPress={onClick}>Start</Button>
        <Button onPress={onClick}>Join</Button>
      </FlexCol>
    </Container>
  );
};

export { PokerLobby };
