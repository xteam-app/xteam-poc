import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Screen } from '../consts';
import { Button } from '@xteam-app/ui';

interface LinkProps {
  to: Screen;
}

type ScreenProp = NativeStackScreenProps<RootStackParamList, Screen>;

export const Link: FC<LinkProps> = ({ to, children }) => {
  const navigation = useNavigation<ScreenProp['navigation']>();

  return (
    <Button
      onPress={() => {
        navigation.navigate(to);
      }}
    >
      {children}
    </Button>
  );
};
