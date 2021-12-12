import { Meta, Story } from '@storybook/react';
import { Caption } from './Caption';
import { baseLayoutDecorator } from '../utils/decorators';
import { Text } from './Text';
import React from 'react';
import { Row } from './Row';

export default {
  component: Caption,
  decorators: [baseLayoutDecorator],
} as Meta;

const Simple: Story = (args) => {
  return <Caption {...args}>Caption</Caption>;
};

const MultiLines: Story<{ header: string; link: string }> = (args) => {
  return (
    <Caption {...args}>
      <Text>Poker Team</Text>
      <Text tw={`text-xs text-blue-200`}>#123</Text>
    </Caption>
  );
};

const Header: Story = (args) => {
  return (
    <Row>
      <Caption>My Caption</Caption>
      <Text>#123</Text>
    </Row>
  );
};

export { Simple, MultiLines, Header };
