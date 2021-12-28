import { Meta, Story } from '@storybook/react';
import { Link } from './Link';
import { BaseLinkProps } from './BaseLink';

export default {
  component: Link,
} as Meta;

const Simple: Story<BaseLinkProps> = (args) => {
  return <Link {...args}>Example Link</Link>;
};
Simple.args = {};

export { Simple };
