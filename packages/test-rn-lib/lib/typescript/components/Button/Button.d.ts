/// <reference types="react" />
interface MyButtonProps {
    onPress: () => void;
    text: string;
}
export declare const MyButton: ({ onPress, text }: MyButtonProps) => JSX.Element;
export {};
