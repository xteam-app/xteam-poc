import React, { createContext, FC, useContext } from 'react';
import { Col, ILink, Link, Text, View } from '../elements';

const HeaderContext = createContext('header');

const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (context) {
    return context;
  }
  throw new Error('This compound components cannot be rendered outside the Header component.');
};

const HeaderTitle: FC = ({ children }) => {
  useHeaderContext();
  return <Text tw={`text-2xl font-bold`}>{children}</Text>;
};

const HeaderSubtitle: FC = ({ children }) => {
  useHeaderContext();
  return <Text tw={`text-base font-medium`}>{children}</Text>;
};

const HeaderAction: FC = ({ children }) => {
  useHeaderContext();
  return <>{children}</>;
};

const Header: FC = ({ children }) => {
  const styles = 'text-2xl font-bold';
  const lines = React.Children.map(children, (line) => {
    // @ts-ignore
    console.log(line?.type?.displayName);
    if (typeof line === 'string') {
      return <Text tw={styles}>{line}</Text>;
    }
    return line;
  });
  return <HeaderContext.Provider value={'header'}>{lines}</HeaderContext.Provider>;
};

export { Header, HeaderTitle, HeaderSubtitle };
