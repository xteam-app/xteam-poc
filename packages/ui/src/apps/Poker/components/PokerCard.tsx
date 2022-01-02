import React, { FC } from 'react';
import { BaseButton, ButtonProps } from '../../../elements/Button/BaseButton';
import { Text } from '../../../elements';
import { useTheme } from '../../../themes';

export const PokerCard: FC<ButtonProps> = ({ children, ...props }) => {
  useTheme();

  return (
    <BaseButton
      tw={`
        w-25 h-25 mt-1 mb-6 mx-2 justify-center items-center
        border-2 border-gray-500 rounded-xl
        bg-pink-200 dark:bg-gray-900
      `}
      {...props}
    >
      <Text tw={`text-xl font-medium`}>{children}</Text>
    </BaseButton>
  );
};
