import { Meta, Story } from '@storybook/react';
import { BaseLayout } from './BaseLayout';
import { Text } from '../elements';
import React from 'react';
import { Header } from '../components';

export default {
  component: BaseLayout,
} as Meta;

const Simple: Story = (args) => {
  return (
    <BaseLayout {...args}>
      <Header>Base Layout</Header>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facere labore laboriosam neque non repellat
        similique? Cupiditate ex ipsa magni! Autem dolores fugit harum, perferendis possimus quibusdam quidem soluta
        voluptatibus.
      </Text>
    </BaseLayout>
  );
};

export { Simple };
