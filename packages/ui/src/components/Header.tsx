import React, { createContext, FC, useContext } from 'react';
import { Row, Text } from '../elements';

const HeaderContext = createContext('header');

const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (context) {
    return context;
  }
  throw new Error('This compound components cannot be rendered outside the Header component.');
};

const HeaderTitle: FC = ({ children }) => {
  return <Text tw={`text-2xl font-bold`}>{children}</Text>;
};

const HeaderSubtitle: FC = ({ children }) => {
  return <Text tw={`text-base font-medium`}>{children}</Text>;
};

const Header: FC = ({ children }) => {
  const styles = 'font-bold';
  // if (React.Children.count(children) > 1) {
  //   styles = styles.concat(' flex flex-col');
  // }
  // const lines = React.Children.map(children, (line) => {
  //   if (typeof line === 'string') {
  //     console.log(`line: ${line}`);
  //     return <Text>{line}</Text>;
  //   }
  //   return line;
  // });
  return (
    <HeaderContext.Provider value={'header'}>
      <Row tw="items-baseline">
        <Text tw={styles}>{children}</Text>
      </Row>
    </HeaderContext.Provider>
  );
};

export { Header, HeaderTitle, HeaderSubtitle };
