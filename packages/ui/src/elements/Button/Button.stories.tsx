import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from './Button';
import { Alert, StyleSheet } from 'react-native';
import { Text, View } from '..';

const Simple: Story = args => {
  return (
    <Button {...args}>
      <Text>I&apos;m pressable!</Text>
    </Button>
  );
};
Simple.args = {
  onPress: () => {
    Alert.alert('cool');
  },
};

const Tmp: Story = args => {
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          setTimesPressed(current => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}
        onLongPress={() => Alert.alert('onLongPress')}
        {...args}
      >
        {({ pressed }) => <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>}
      </Button>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});

export default {
  title: 'Elements/Button',
  component: Button,
} as Meta;

export { Simple, Tmp };
