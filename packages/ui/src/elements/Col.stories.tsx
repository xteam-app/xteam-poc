import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Col } from './Col';
import { Text } from './Text';

export default {
  component: Col,
} as Meta;

const Template: Story = (args) => {
  return (
    <Col {...args}>
      <Text>First</Text>
      <Text>Second</Text>
    </Col>
  );
};

const Default = Template.bind({});

const Start = Template.bind({});
Start.args = {
  tw: 'items-start',
};

const End = Template.bind({});
End.args = {
  tw: 'items-end',
};

export { Default, Start, End };
