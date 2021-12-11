import React from 'react';
import { Alert, ScrollView } from 'react-native';

import { BaseLayout, Caption, PokerGrid } from '@xteam-app/ui';

const App = () => {
  return (
    <BaseLayout>
      <Caption>Have fun with us</Caption>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <PokerGrid
          onClick={(card) => {
            Alert.alert(card.toString());
          }}
        />
      </ScrollView>
    </BaseLayout>
  );
};

export default App;
