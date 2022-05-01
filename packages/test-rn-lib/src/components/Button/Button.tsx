import React from 'react';

interface MyButtonProps {
  onPress: () => void;
  text: string;
}

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <>
      <div>bob web+</div>
      <button onClick={onPress}>
        <span>{text}</span>
      </button>
    </>
  );
};
