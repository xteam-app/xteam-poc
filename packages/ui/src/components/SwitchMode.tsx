import React, { FC } from 'react';
import { useTheme } from '../themes';
import { BaseButton } from '../elements/Button/BaseButton';
import { Icon, IconValue } from '../elements';

export const SwitchMode: FC = () => {
  const { colorScheme, toggleColorScheme } = useTheme();

  if (colorScheme === 'light') {
    return (
      <BaseButton tw={'p-2'} onPress={toggleColorScheme}>
        <Icon name={IconValue.sun} />
      </BaseButton>
    );
  }

  return (
    <BaseButton tw={'m-2'} onPress={toggleColorScheme}>
      <Icon name={IconValue.moon} />
    </BaseButton>
  );
};
