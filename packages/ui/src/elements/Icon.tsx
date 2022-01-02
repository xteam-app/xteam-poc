import React, { FC } from 'react';
import * as ComponentsMap from '../icons';
import { BaseProps } from '../types';
import { tw as tailwind } from '../utils/tailwind';

export enum IconValue {
  moon = 'IconMoon',
  sun = 'IconSun',
}

export interface IconProps extends BaseProps {
  name: IconValue;
}

export const Icon: FC<IconProps> = ({ name, tw, ...props }) => {
  const style = tailwind.style('w-10 h-10 text-red-700 dark:text-red-500', tw);

  const Element = ComponentsMap[name];
  return <Element style={style} {...props} />;
};
