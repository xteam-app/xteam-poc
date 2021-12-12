import { Meta, Story } from '@storybook/react';
import { ILink, Link } from './Link';

export default {
  component: Link,
} as Meta;

const Simple: Story<ILink> = (args) => {
  return <Link {...args} />;
};

Simple.args = {
  to: 'https://example.com',
  children: 'Example Link',
};

export { Simple };
