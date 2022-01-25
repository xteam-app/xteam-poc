import React, { FC, useEffect, useLayoutEffect, useState } from 'react';
import { Button, Caption, Container } from '@xteam-app/ui';
import { Screen } from '../../consts';
import { useMountCount } from '../../useMountCount';

export const CostsAddScreen: FC = ({ navigation }) => {
  useMountCount();
  return (
    <Container>
      <Caption>New cost</Caption>
      <Button onPress={() => navigation.push(Screen.CostsAdd)}>Next step</Button>
      <Button onPress={() => navigation.navigate(Screen.CostsAdd2)}>Go to last</Button>
    </Container>
  );
};
