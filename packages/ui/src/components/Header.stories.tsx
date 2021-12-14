import { Meta, Story } from '@storybook/react';
import { Caption, Row, Text, View } from '../elements';
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

const SimpleMultilineHeader: Story = (args) => {
  return (
    <Header {...args}>
      <Text>Lorem ipsum dolor sit amet</Text>
      <Text>consectetur adipisicing elit</Text>
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
      <Row tw={'justify-between items-baseline'}>
        <View tw={'mr-6'}>
          <HeaderTitle>Lorem ipsum</HeaderTitle>
          <HeaderSubtitle>consectetur adipisicing elit</HeaderSubtitle>
        </View>
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
