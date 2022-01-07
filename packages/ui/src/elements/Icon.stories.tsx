import { Meta, Story } from '@storybook/react';
import { Icon, IconProps, IconValue } from './Icon';

export default {
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => {
  return <Icon {...args} />;
};

const Sun = Template.bind({});
Sun.args = {
  name: IconValue.sun,
};

const Moon = Template.bind({});
Moon.args = {
  name: IconValue.moon,
};

const Custom = Template.bind({});
Custom.args = {
  name: IconValue.moon,
  tw: 'w-30 h-30 text-yellow-500 dark:text-yellow-300',
};

export { Sun, Moon, Custom };
