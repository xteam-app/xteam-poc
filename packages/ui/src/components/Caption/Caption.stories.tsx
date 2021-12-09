import { Meta, Story } from '@storybook/react';
import { Caption } from './Caption';

const Simple: Story = (args) => {
  return <Caption {...args} />;
};
Simple.args = {
  children: 'Caption',
};

export default {
  title: 'Components/Caption',
  component: Caption,
} as Meta;

export { Simple };
