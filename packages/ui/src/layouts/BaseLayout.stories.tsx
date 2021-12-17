import { Meta, Story } from '@storybook/react';
import { BaseLayout } from './BaseLayout';
import { Caption, Text } from '@elements';
import React from 'react';

export default {
  component: BaseLayout,
} as Meta;

const WithCaption: Story = (args) => {
  return (
    <BaseLayout {...args}>
      <Caption>Base Layout</Caption>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facere labore laboriosam neque non repellat
        similique? Cupiditate ex ipsa magni! Autem dolores fugit harum, perferendis possimus quibusdam quidem soluta
        voluptatibus.
      </Text>
    </BaseLayout>
  );
};

export { WithCaption };
