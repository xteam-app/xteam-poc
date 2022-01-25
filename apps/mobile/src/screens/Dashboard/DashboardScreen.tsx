import React, { FC, useEffect, useRef } from 'react';
import { Button, Caption, Container, View } from '@xteam-app/ui';
import { Link } from '../../components/Link';
import { Screen } from '../../consts';

export const DashboardScreen: FC = ({ navigation }) => {
  return (
    <Container>
      <Caption>Dashboard screen</Caption>
      <View tw={'flex-1 justify-center'}>
        <Button onPress={() => navigation.navigate(Screen.Costs, { screen: Screen.CostsAdd })}>Add Cost</Button>
        <Link to={Screen.Invoices}>Invoices</Link>
      </View>
    </Container>
  );
};
