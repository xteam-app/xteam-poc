import React, { FC } from 'react';
import { Button, Caption, Container } from '@xteam-app/ui';
import { Screen } from '../../consts';

export const CostsAddScreen: FC = ({ navigation }) => {
  return (
    <Container>
      <Caption>New cost</Caption>
      <Button onPress={() => navigation.push(Screen.CostsAdd)}>Next step</Button>
      <Button onPress={() => navigation.navigate(Screen.CostsAdd2)}>Go to last</Button>
    </Container>
  );
};
