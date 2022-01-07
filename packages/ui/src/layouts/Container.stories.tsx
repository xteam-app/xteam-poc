import { Meta, Story } from '@storybook/react';
import { Container as Component } from './Container';
import { Button, Caption, FlexRow, Text, View } from '../elements';
import React from 'react';
import { ScrollView } from 'react-native';

export default {
  component: Component,
} as Meta;

const Container: Story = (args) => {
  return (
    <Component {...args}>
      <Caption>Container Layout</Caption>
      <FlexRow>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis dolore doloribus eum id
          mollitia neque nisi nobis, nostrum odit quaerat quis, quod quos sequi tempore unde veniam vitae voluptas!
        </Text>
      </FlexRow>
      <Button>Ok</Button>
    </Component>
  );
};

const WithPinnedFooter: Story = (args) => {
  return (
    <Component {...args}>
      <View tw={'flex-shrink mb-7'}>
        <ScrollView>
          <View tw={'items-center'}>
            <Caption>Container Layout</Caption>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A delectus, dicta distinctio doloribus eligendi
              hic incidunt labore laborum magni, molestias nisi quibusdam rerum sapiente sequi similique suscipit
              voluptatem? Animi dicta dolore expedita ipsum iusto molestias nisi, placeat, possimus quia sed sit, soluta
              vitae voluptatibus. Dignissimos facilis fuga impedit inventore quam. Aliquam cum, dolores dolorum
              excepturi expedita maxime modi, nihil obcaecati, officiis pariatur possimus quia quod rem tempora vitae
              voluptatibus voluptatum. Consequuntur corporis delectus magni odit quia? A aliquam animi aut, beatae
              corporis dolorem dolorum eaque earum est et explicabo illum ipsa iure magni maiores minus modi molestiae
              molestias mollitia nemo nesciunt numquam officiis, possimus quaerat qui quis ratione reiciendis sunt
              tempora temporibus vitae voluptate voluptates voluptatibus.
            </Text>
          </View>
        </ScrollView>
      </View>

      <Button>Ok</Button>
      <Button>cancel</Button>
    </Component>
  );
};

export { Container, WithPinnedFooter };
