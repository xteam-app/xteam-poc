import { Meta, Story } from '@storybook/react';
import { PokerCard as Component } from './PokerCard';
import { Alert } from 'react-native';

export default {
  component: Component,
} as Meta;

export const PokerCard: Story = (args) => {
  return <Component {...args}>5</Component>;
};

PokerCard.args = {
  onPress: () => Alert.alert('click'),
};
