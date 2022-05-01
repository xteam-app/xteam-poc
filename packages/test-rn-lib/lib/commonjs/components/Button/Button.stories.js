"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Basic = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("./Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MyButtonMeta = {
  title: "MyButton",
  component: _Button.MyButton,
  argTypes: {
    onPress: {
      action: "pressed the button"
    }
  },
  args: {
    text: "Hello world"
  }
};
var _default = MyButtonMeta;
exports.default = _default;

const Basic = args => /*#__PURE__*/_react.default.createElement(_Button.MyButton, args);

exports.Basic = Basic;
//# sourceMappingURL=Button.stories.js.map