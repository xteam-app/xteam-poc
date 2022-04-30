import React from 'react';

interface MyButtonProps {
  onPress: () => void;
  text: string;
}

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <button onClick={onPress}>
      <span>WEB</span>
      <span>{text}</span>
    </button>
  );
};
