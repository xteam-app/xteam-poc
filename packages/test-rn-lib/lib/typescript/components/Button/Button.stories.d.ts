import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { MyButton } from "./Button";
declare const MyButtonMeta: ComponentMeta<typeof MyButton>;
export default MyButtonMeta;
declare type MyButtonStory = ComponentStory<typeof MyButton>;
export declare const Basic: MyButtonStory;
