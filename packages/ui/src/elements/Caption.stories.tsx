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

const SimpleWithCustomText: Story = (args) => {
  return (
    <Caption {...args}>
      <Text tw={'text-red-500'}>lorem ipsum</Text>
    </Caption>
  );
};

export { Simple, SimpleWithCustomText };
