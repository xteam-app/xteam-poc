import React, { FC } from 'react';
import { Button, Caption, Container } from '@xteam-app/ui';
import { Screen } from '../../consts';

export const CostsAddFinishScreen: FC = ({ navigation }) => {
  return (
    <Container>
      <Caption>Costs Saved</Caption>
      <Button onPress={() => navigation.popToTop()}>Popo to top</Button>
      <Button onPress={() => navigation.navigate(Screen.Costs, { screen: Screen.CostsList })}>Error go to list</Button>
    </Container>
  );
};
