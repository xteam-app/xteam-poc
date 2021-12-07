import { Meta, Story } from '@storybook/react';
import { Text } from './Text';
import { TextProps } from 'react-native';

const Template: Story<TextProps> = args => <Text {...args} />;

const Simple = Template.bind({});
Simple.args = {
  children: 'Example text',
};

export default {
  title: 'Elements/Text',
  component: Text,
} as Meta;

export { Simple };
