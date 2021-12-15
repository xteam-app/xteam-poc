import { Meta, Story } from '@storybook/react';
import { ILink } from './Link';
import { ShareLink } from './ShareLink';

export default {
  component: ShareLink,
} as Meta;

const Simple: Story<ILink> = (args) => {
  return <ShareLink {...args}>Example Link</ShareLink>;
};
Simple.args = {
  to: 'https://example.com',
};

export { Simple };
