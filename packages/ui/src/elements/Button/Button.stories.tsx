import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from './Button';
import { Alert } from 'react-native';
import { containerDecorator } from '../../utils/decorators';

const Simple: Story = (args) => {
  return <Button {...args}>I&apos;m pressable!</Button>;
};

Simple.args = {
  onPress: () => {
    Alert.alert('cool');
  },
};

export default {
  component: Button,
  decorators: [containerDecorator],
} as Meta;

export { Simple };
