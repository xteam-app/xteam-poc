import { Meta, Story } from '@storybook/react';
import { Caption, Col, Row, Text, View } from '../elements';
import React from 'react';
import { baseLayoutDecorator } from '../utils/decorators';
import { Header, HeaderSubtitle, HeaderTitle } from './Header';
import { ShareLink } from '../elements/Link/ShareLink';

export default {
  component: Header,
  decorators: [baseLayoutDecorator],
} as Meta;

const Simple: Story = (args) => {
  return <Header {...args}>Simple Lorem ipsum</Header>;
};

/**
 * TODO: allow only HeadComponents?
 */
const SimpleMultilineHeader: Story = (args) => {
  return (
    <Header {...args}>
      <Text>1. Lorem ipsum title</Text>
      <Text>2. consectetur subtitle</Text>
    </Header>
  );
};

const MultilineHeader: Story = (args) => {
  return (
    <Header {...args}>
      <HeaderTitle>Lorem ipsum dolor sit amet</HeaderTitle>
      <HeaderSubtitle>consectetur adipisicing elit</HeaderSubtitle>
    </Header>
  );
};

const MultilineHeaderWithLink: Story = (args) => {
  return (
    <Header {...args}>
      <Row tw={''}>
        <Col tw={'items-start'}>
          <HeaderTitle>Lorem ipsum</HeaderTitle>
          <HeaderSubtitle>consectetur adipisicing elit</HeaderSubtitle>
        </Col>
        <ShareLink to={'https://xteam.app/t/123'}>#123</ShareLink>
      </Row>

      {/*<Link to={'https://example.com'}>#123</Link>*/}
    </Header>
  );
};

const HeaderWithCaption: Story = (args) => {
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

export { Simple, SimpleMultilineHeader, MultilineHeader, MultilineHeaderWithLink, HeaderWithCaption };
