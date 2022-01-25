import React, { FC } from 'react';
import { Button, Caption, Container } from '@xteam-app/ui';
import { Screen } from '../../consts';

export const CostsAdd2Screen: FC = ({ navigation }) => {
  return (
    <Container>
      <Caption>Costs add</Caption>
      <Button onPress={() => navigation.popToTop()}>Error Finish</Button>
      <Button onPress={() => navigation.navigate(Screen.CostsList)}>Success Finish</Button>
      <Button onPress={() => navigation.navigate(Screen.CostsAddFinish)}>Save</Button>
    </Container>
  );
};
