import React, { FC } from 'react';
import {Text as DefaultText} from 'react-native'
export const Text: FC = (props) => {
  return (
    <DefaultText {...props} />
  );
};
