import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FlexCol, Text } from '.';

export default {
  component: FlexCol,
} as Meta;

const Template: Story = (args) => {
  return (
    <FlexCol {...args}>
      <Text>First</Text>
      <Text>Second</Text>
    </FlexCol>
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
