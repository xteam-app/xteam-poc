import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Routes } from '../consts';
import { ButtonLink } from '@xteam-app/ui';

interface LinkProps {
  to: Routes;
}

type ScreenProp = NativeStackScreenProps<RootStackParamList, Routes>;

export const Link: FC<LinkProps> = ({ to, children }) => {
  const navigation = useNavigation<ScreenProp['navigation']>();

  return (
    <ButtonLink
      onPress={() => {
        navigation.navigate(to);
      }}
    >
      {children}
    </ButtonLink>
  );
};
