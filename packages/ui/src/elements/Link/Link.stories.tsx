import { Meta, Story } from '@storybook/react';
import { ILink, Link } from './Link';

export default {
  component: Link,
} as Meta;

const Simple: Story<ILink> = (args) => {
  return <Link {...args}>Example Link</Link>;
};
Simple.args = {
  to: 'https://example.com',
};

export { Simple };
