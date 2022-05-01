import React from 'react';
import { Platform } from 'react-native';

interface MyButtonProps {
  onPress: () => void;
  text: string;
}

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  console.log({Platform});
  return null;
  return (
    <>
      <div>web</div>
      <button onClick={onPress}>
        <span>{text}</span>
      </button>
    </>
  );
};
