import { useLayoutEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

export const useMountCount = () => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    const random = Math.random();
    console.log('--------------');
    setCount(random);
    console.log(`mount ${count}`);
  }, []);

  useFocusEffect(() => {
    console.log(`focus ${count}`);
  });
  return count;
};
