import { Meta, Story } from '@storybook/react';
import { GridView } from './GridView';
import { Text } from '../elements';

export default {
  component: GridView,
} as Meta;

const Simple: Story = () => {
  return (
    <GridView>
      <Text>GridView</Text>
    </GridView>
  );
};

export { Simple };
