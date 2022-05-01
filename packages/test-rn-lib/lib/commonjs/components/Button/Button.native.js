"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MyButton = _ref => {
  let {
    onPress,
    text
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: styles.container,
    onPress: onPress
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.text
  }, "bob NATIVE"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.text
  }, text));
};

exports.MyButton = MyButton;

const styles = _reactNative.StyleSheet.create({
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