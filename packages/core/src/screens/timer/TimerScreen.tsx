import React, { FC } from 'react';
import { Button, Caption, Container, FlexRow, Text } from '@xteam-app/ui';
import { HomeTabScreenProps } from '../../router/router';
import { Screen } from '../../router/routes';

export const TimerScreen: FC<HomeTabScreenProps<Screen.TimerTab>> = () => {
  return (
    <Container>
      <Caption>Your pomodoro timer here</Caption>
      <FlexRow>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis dolore doloribus eum id
          mollitia neque nisi nobis, nostrum odit quaerat quis, quod quos sequi tempore unde veniam vitae voluptas!
        </Text>
      </FlexRow>
      <Button>Start</Button>
    </Container>
  );
};
