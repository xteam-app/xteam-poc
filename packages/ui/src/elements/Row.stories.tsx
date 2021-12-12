import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Row } from './Row';
import { Text } from './Text';

export default {
  component: Row,
} as Meta;

const Template: Story = (args) => {
  return (
    <Row {...args}>
      <Text>First</Text>
      <Text>Second</Text>
    </Row>
  );
};

const Default = Template.bind({});

const Around = Template.bind({});
Around.args = {
  tw: 'justify-around',
};

const Evenly = Template.bind({});
Evenly.args = {
  tw: 'justify-evenly',
};

export { Default, Around, Evenly };
