import React from 'react';

import { BaseLayout, Caption, PokerGrid, Row, Text } from '@xteam-app/ui';
import { Alert } from 'react-native';

const App = () => {
  return (
    <BaseLayout>
      <Row tw={'items-baseline'}>
        <Caption>My Team</Caption>
        <Text>#123</Text>
      </Row>
      <PokerGrid onClick={(item) => Alert.alert(item.toString())} />
    </BaseLayout>
  );
};

export default App;
