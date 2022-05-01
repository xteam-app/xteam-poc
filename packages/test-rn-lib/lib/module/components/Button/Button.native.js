import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
export const MyButton = _ref => {
  let {
    onPress,
    text
  } = _ref;
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: styles.container,
    onPress: onPress
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.text
  }, "bob NATIVE"), /*#__PURE__*/React.createElement(Text, {
    style: styles.text
  }, text));
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "violet"
  },
  text: {
    color: "black"
  }
});
//# sourceMappingURL=Button.native.js.map