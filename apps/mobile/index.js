import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';

const Bootstrap = () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
AppRegistry.registerComponent(appName, () => Bootstrap);
