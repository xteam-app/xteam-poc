import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ButtonLink } from '@xteam-app/ui/src/elements/Link/ButtonLink';

interface LinkProps {
  to: string;
}

export const Link: FC<LinkProps> = ({ to, children }) => {
  const navigation = useNavigation();

  return (
    <ButtonLink
      onPress={() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        navigation.navigate(to);
      }}
    >
      {children}
    </ButtonLink>
  );
};
