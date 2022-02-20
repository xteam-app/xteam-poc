import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@xteam-app/ui';
import { Screen } from '../router/routes';

interface LinkProps {
  to: Screen;
}

export const Link: FC<LinkProps> = ({ to, children }) => {
  const navigation = useNavigation();

  return (
    <Button
      onPress={() => {
        // TODO:
        navigation.navigate(to as any);
      }}
    >
      {children}
    </Button>
  );
};
