import React, { FC } from 'react';
import { BaseLink, BaseLinkProps } from './BaseLink';

export const ButtonLink: FC<BaseLinkProps> = ({ children, ...props }) => {
  return (
    <BaseLink
      tw={`
        w-42 h-12 mb-6
        flex justify-center items-center
        rounded
        uppercase text-lg font-bold
      `}
      {...props}
    >
      {children}
    </BaseLink>
  );
};
