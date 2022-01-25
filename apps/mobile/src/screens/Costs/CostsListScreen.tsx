import React, { FC } from 'react';
import { Button, Caption, Container } from '@xteam-app/ui';
import { Screen } from '../../consts';

export const CostsListScreen: FC = ({ navigation, route }) => {
  return (
    <Container>
      <Caption>All Costs</Caption>
      <Button onPress={() => navigation.push(Screen.CostsAdd)}>Add new</Button>
    </Container>
  );
};
