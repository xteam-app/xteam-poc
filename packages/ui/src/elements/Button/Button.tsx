import React, { FC } from 'react';
import { Text } from '..';
import { useTheme } from '../../themes';

import { tw as tailwind } from '../../utils/tailwind';
import { BaseButton, ButtonProps } from './BaseButton';

export const Button: FC<ButtonProps> = ({ tw, children, ...props }) => {
  useTheme();
  const style = tailwind.style(
    `
      w-64 p-3 mb-5
      bg-red-700 dark:bg-red-500
      rounded
    `,
    tw
  );

  return (
    <BaseButton style={style} {...props}>
      <Text
        tw={`
          text-center text-white text-lg font-bold 
          uppercase bg-transparent
        `}
      >
        {children}
      </Text>
    </BaseButton>
  );
};
