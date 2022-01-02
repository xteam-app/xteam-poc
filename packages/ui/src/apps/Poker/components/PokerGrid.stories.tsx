import { Meta, Story } from '@storybook/react';
import { IPokerGrid, PokerGrid } from './PokerGrid';
import { containerDecorator } from '../../../utils/decorators';

export default {
  component: PokerGrid,
  title: '',
  decorators: [containerDecorator],
} as Meta;

const Template: Story<IPokerGrid> = (args) => {
  return <PokerGrid {...args} />;
};
const Default = Template.bind({});

const Fibonacci = Template.bind({});
Fibonacci.args = {
  deck: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144],
};

const TShirts = Template.bind({});
TShirts.args = {
  deck: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
};

// TODO: create custom deck
const CustomDeck = Template.bind({});
CustomDeck.args = {
  // deck: [{ id: 1, title: 'One' }],
};

export { Default, Fibonacci, TShirts };
