import * as React from 'react';

import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

export const MyTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          console.log({ options });
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignContent: 'center', justifyContent: 'center', padding: 2 }}
            >
              <Text style={{ color: isFocused ? '#e11c1c' : '#f3f0f0', textAlign: 'center' }}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
