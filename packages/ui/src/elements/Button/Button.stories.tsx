import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from './Button';
import { Alert } from 'react-native';
import { Text } from '..';

const Simple: Story = (args) => {
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

// const Tmp: Story = (args) => {
//   const [timesPressed, setTimesPressed] = useState(0);
//
//   let textLog = '';
//   if (timesPressed > 1) {
//     textLog = timesPressed + 'x onPress';
//   } else if (timesPressed > 0) {
//     textLog = 'onPress';
//   }
//
//   return (
//     <View>
//       <Button
//         onPress={() => {
//           setTimesPressed((current) => current + 1);
//         }}
//         style={({ pressed }) => [
//           {
//             backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
//           },
//           styles.wrapperCustom,
//         ]}
//         onLongPress={() => Alert.alert('onLongPress')}
//         {...args}
//       >
//         {({ pressed }) => <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>}
//       </Button>
//       <View>
//         <Text testID="pressable_press_console">{textLog}</Text>
//       </View>
//     </View>
//   );
// };

export default {
  component: Button,
} as Meta;

export { Simple };
