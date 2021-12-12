import { Meta, Story } from '@storybook/react';
import { Caption } from './Caption';
import { Text } from './Text';
import React from 'react';

export default {
  component: Caption,
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

export { Simple, MultiLines };
