import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const IconMoon: FC<SvgProps> = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <Path d="M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586z" />
    </Svg>
  );
};
