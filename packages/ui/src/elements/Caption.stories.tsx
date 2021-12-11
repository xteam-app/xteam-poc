import { Meta, Story } from '@storybook/react';
import { Caption } from './Caption';
import { baseLayoutDecorator } from '../utils/decorators';
import { Text } from './Text';

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
      <Text size={'xs'}>#123</Text>
    </Caption>
  );
};

export { Simple, MultiLines };
