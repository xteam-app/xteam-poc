import { Meta, Story } from '@storybook/react';
import { GridView } from './GridView';
import { Text } from '../elements';

const Simple: Story = () => {
  return (
    <GridView>
      <Text>GridView</Text>
    </GridView>
  );
};

export default {
  title: 'Layouts/GridView',
  component: GridView,
} as Meta;

export { Simple };
