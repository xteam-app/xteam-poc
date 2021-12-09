import React from 'react';
import { Alert, ScrollView } from 'react-native';

import { Caption, PokerGrid, View } from '@xteam-app/ui';
import { BaseLayout } from '@xteam-app/ui/src/layouts/Layout/BaseLayout';

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
