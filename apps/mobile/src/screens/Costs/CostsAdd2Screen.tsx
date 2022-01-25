import React, { FC } from 'react';
import { Button, Caption, Container } from '@xteam-app/ui';
import { Screen } from '../../consts';

export const CostsAdd2Screen: FC = ({ navigation }) => {
  return (
    <Container>
      <Caption>Costs add</Caption>
      <Button onPress={() => navigation.popToTop()}>pop to top Finish</Button>
      <Button onPress={() => navigation.navigate(Screen.Main, { screen: Screen.MainCosts })}>Go to List</Button>
      <Button onPress={() => navigation.navigate(Screen.CostsAddFinish)}>Modal Finish</Button>
    </Container>
  );
};
