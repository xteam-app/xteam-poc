import { Meta, Story } from '@storybook/react';
import { IPokerGrid, PokerGrid } from './PokerGrid';

const Simple: Story<IPokerGrid> = (args) => {
  return <PokerGrid {...args} />;
};

export default {
  title: 'Components/PokerGrid',
  component: PokerGrid,
} as Meta;

export { Simple };
