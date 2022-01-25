import React, { FC } from 'react';
import { Screen } from '../../consts';
import { CostsListScreen } from './CostsListScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CostsAddScreen } from './CostsAddScreen';
import { CostsAdd2Screen } from './CostsAdd2Screen';
import { CostsAddFinishScreen } from './CostsAddFinishScreen';

const Stack = createNativeStackNavigator();
export const CostsStack: FC = () => {
  return (
    <Stack.Navigator initialRouteName={Screen.CostsList}>
      <Stack.Group>
        <Stack.Screen name={Screen.CostsAdd} component={CostsAddScreen} />
        <Stack.Screen name={Screen.CostsAdd2} component={CostsAdd2Screen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
