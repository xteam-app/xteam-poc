import { Meta, Story } from '@storybook/react';
import { Row } from '../elements/Row';
import { Caption, Text } from '../elements';
import { Link } from '../elements/Link';
import React from 'react';
import { baseLayoutDecorator } from '../utils/decorators';

export default {
  decorators: [baseLayoutDecorator],
} as Meta;

const Simple: Story = (args) => {
  return (
    <Row tw={'items-baseline'}>
      <Caption {...args}>
        <Text>Caption</Text>
        <Text tw="text-xs">SubCaption</Text>
      </Caption>
      <Text>#123</Text>
    </Row>
  );
};

export { Simple };
