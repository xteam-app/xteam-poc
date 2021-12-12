import { Meta, Story } from '@storybook/react';
import { BaseLayout } from '../layouts';
import { PokerGrid } from '../components';
import * as PokerGridStories from '../components/PokerGrid.stories';
import { Row } from '../elements/Row';
import { Caption, Text } from '../elements';

export default {} as Meta;

const PokerScreen: Story = (args) => {
  return (
    <BaseLayout>
      <Row>
        <Caption>My Team</Caption>
        <Text>#123</Text>
      </Row>
      {/* @ts-ignore */}
      <PokerGrid {...PokerGridStories.Default.args} />
    </BaseLayout>
  );
};

export { PokerScreen };
