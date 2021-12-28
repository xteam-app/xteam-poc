import { Meta, Story } from '@storybook/react';
import { BaseLink as Link, BaseLinkProps } from './BaseLink';

export default {
  component: Link,
} as Meta;

const BaseLink: Story<BaseLinkProps> = (args) => {
  return <Link {...args}>Example Link</Link>;
};

export { BaseLink };
