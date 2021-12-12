import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Divider } from './Divider';
import { baseLayoutDecorator } from '../utils/decorators';
import { View } from './View';
import { Text } from './Text';

export default {
  component: Divider,
  decorators: [baseLayoutDecorator],
} as Meta;

const Simple: Story = (args) => {
  return (
    <View>
      <Text>Before divider</Text>
      <Divider />
      <Text>After divider</Text>
    </View>
  );
};

export { Simple };
