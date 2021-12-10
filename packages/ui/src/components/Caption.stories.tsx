import { Meta, Story } from '@storybook/react';
import { Caption } from './Caption';
import { baseLayoutDecorator } from '../utils/decorators';

export default {
  component: Caption,
  decorators: [baseLayoutDecorator],
} as Meta;

const Simple: Story = (args) => {
  return <Caption {...args} />;
};
Simple.args = {
  children: 'Caption',
};

export { Simple };
