import React from 'react';
import { View } from './View';
import { Meta, Story } from '@storybook/react';
import { ViewProps } from 'react-native';
import { Text } from '../Text/Text';

const Template: Story<ViewProps> = args => {
  return (
    <View {...args}>
      <Text>test block</Text>
    </View>
  );
};

const Simple = Template.bind({});

export default {
  component: View,
  title: 'Elements/View',
} as Meta;

export { Simple };
