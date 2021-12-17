import React from 'react';

import { BaseLayout, Caption, PokerGrid, FlexRow, Text } from '@xteam-app/ui';
import { Alert } from 'react-native';

const App = () => {
  return (
    <BaseLayout>
      <FlexRow tw={'items-baseline'}>
        <Caption>My Team</Caption>
        <Text>#123</Text>
      </FlexRow>
      <PokerGrid onClick={(item) => Alert.alert(item.toString())} />
    </BaseLayout>
  );
};

export default App;
