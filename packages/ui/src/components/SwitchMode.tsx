import React, { FC } from 'react';
import { useTheme } from '../themes';
import { Button } from '../elements';

export const SwitchMode: FC = () => {
  const { colorScheme, toggleColorScheme } = useTheme();
  return (
    <Button
      tw={`
        w-42 h-12 mb-6
        flex justify-center items-center
        rounded
        uppercase text-lg font-bold
      `}
      onPress={toggleColorScheme}
    >
      {colorScheme}
    </Button>
  );
};
