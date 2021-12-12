import { Meta, Story } from '@storybook/react';
import { Row } from '../elements/Row';
import { Caption, Text } from '../elements';
import { Link } from '../elements/Link';
import React from 'react';
import { baseLayoutDecorator } from '../utils/decorators';

export default {
  decorators: [baseLayoutDecorator],
} as Meta;

const HeaderWithLink: Story = (args) => {
  return (
    <Row>
      <Caption {...args}>
        <Text>Caption</Text>
        <Text tw="text-xs">SubCaption</Text>
      </Caption>
      <Link to="https://example.com">#123</Link>
    </Row>
  );
};
HeaderWithLink.storyName = 'Header with link';

export { HeaderWithLink };
