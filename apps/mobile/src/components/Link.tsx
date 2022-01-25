import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Screen } from '../consts';
import { Button } from '@xteam-app/ui';

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
