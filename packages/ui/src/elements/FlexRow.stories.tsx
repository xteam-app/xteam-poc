import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FlexRow, Text } from '.';

export default {
  component: FlexRow,
} as Meta;

const Template: Story = (args) => {
  return (
    <FlexRow {...args}>
      <Text>First</Text>
      <Text>Second</Text>
    </FlexRow>
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

const Center = Template.bind({});
Center.args = {
  tw: 'justify-center',
};

export { Default, Around, Evenly, Center };
