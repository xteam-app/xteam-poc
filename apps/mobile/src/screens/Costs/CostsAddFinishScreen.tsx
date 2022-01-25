import React, { FC } from 'react';
import { Button, Caption, Container } from '@xteam-app/ui';
import { Screen } from '../../consts';
import { CommonActions } from '@react-navigation/native';

const resetState = (state: any) => {
  console.log('------ reset');
  const routes = [
    // just leave first and last
    ...state.routes.slice(0, 1),
    ...state.routes.slice(-1),
  ];
  return CommonActions.reset({
    ...state,
    routes,
    index: routes.length - 1,
  });
};

export const CostsAddFinishScreen: FC = ({ navigation, route }) => {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('transitionEnd', () => {
      navigation.dispatch(resetState);
    });

    return unsubscribe;
  }, [navigation, route]);

  return (
    <Container>
      <Caption>Costs Saved</Caption>
      <Button onPress={() => navigation.popToTop()}>Pop to top</Button>
      <Button onPress={() => navigation.goBack()}>go back</Button>
      <Button onPress={() => navigation.navigate(Screen.Main, { screen: Screen.MainCosts })}>go to list</Button>
    </Container>
  );
};
