import React, { FC } from 'react';
import { BaseLinkProps, Link } from './Link';

export const ButtonLink: FC<BaseLinkProps> = ({ children, ...props }) => {
  return (
    <Link
      tw={`
        block w-42 h-12 mb-6
        flex justify-center items-center
        border-red-500 bg-black rounded
        uppercase text-lg font-bold bg-black
      `}
      {...props}
    >
      {children}
    </Link>
  );
};
