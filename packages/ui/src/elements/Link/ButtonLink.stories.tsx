import { Meta, Story } from '@storybook/react';
import { ILink } from './Link';
import { ButtonLink } from './ButtonLink';

export default {
  component: ButtonLink,
} as Meta;

const Simple: Story<ILink> = (args) => {
  return <ButtonLink {...args}>Example Link</ButtonLink>;
};
Simple.args = {
  to: 'https://example.com',
};

export { Simple };
