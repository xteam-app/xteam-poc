import { Meta, Story } from '@storybook/react';
import { ButtonLink } from './ButtonLink';
import { baseLayoutDecorator } from '../../utils/decorators';
import { BaseLinkProps } from './BaseLink';

export default {
  component: ButtonLink,
  decorators: [baseLayoutDecorator],
} as Meta;

const Simple: Story<BaseLinkProps> = (args) => {
  return <ButtonLink {...args}>Example Link</ButtonLink>;
};
Simple.args = {};

export { Simple };
