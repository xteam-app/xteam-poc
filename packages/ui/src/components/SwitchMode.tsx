import React, { FC } from 'react';
import { useTheme } from '../themes';
import { BaseButton } from '../elements/Button/BaseButton';
import { Icon, IconValue } from '../elements';

export const SwitchMode: FC = () => {
  const { colorScheme, toggleColorScheme } = useTheme();
  const tw = `
    w-11 h-11 
    justify-center items-center
  `;
  const iconMode = colorScheme === 'light' ? IconValue.sun : IconValue.moon;

  return (
    <BaseButton tw={tw} onPress={toggleColorScheme}>
      <Icon name={iconMode} />
    </BaseButton>
  );
};
