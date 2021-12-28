import { Meta, Story } from '@storybook/react';
import { ShareLink } from './ShareLink';
import { BaseLinkProps } from './BaseLink';

export default {
  component: ShareLink,
} as Meta;

const Simple: Story<BaseLinkProps> = (args) => {
  return <ShareLink {...args}>Example Link</ShareLink>;
};
Simple.args = {};

export { Simple };
