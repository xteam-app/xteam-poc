"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyButton = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MyButton = _ref => {
  let {
    onPress,
    text
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, "bob web+"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: onPress
  }, /*#__PURE__*/_react.default.createElement("span", null, text)));
};

exports.MyButton = MyButton;
//# sourceMappingURL=Button.js.map