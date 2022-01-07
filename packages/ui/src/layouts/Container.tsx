import React, { FC } from 'react';
import { BaseLayout } from './BaseLayout';
import { FlexCol } from '../elements';

export const Container: FC = ({ children }) => {
  return (
    <BaseLayout>
      <FlexCol
        tw={`
          px-6 py-6
        `}
      >
        {children}
      </FlexCol>
    </BaseLayout>
  );
};
