import { Meta, Story } from '@storybook/react';
import { SwitchMode } from './SwitchMode';
import { baseLayoutDecorator } from '../utils/decorators';

export default {
  component: SwitchMode,
  decorators: [baseLayoutDecorator],
} as Meta;

const Simple: Story = (args) => <SwitchMode {...args} />;

export { Simple };
