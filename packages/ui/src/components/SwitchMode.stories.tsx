import { Meta, Story } from '@storybook/react';
import { SwitchMode as Component } from './SwitchMode';
import { containerDecorator } from '../utils/decorators';

export default {
  component: Component,
  decorators: [containerDecorator],
} as Meta;

const SwitchMode: Story = (args) => <Component {...args} />;

export { SwitchMode };
