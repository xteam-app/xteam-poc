import { ClassInput } from 'twrnc/dist/esm/types';
import { useDeviceContext } from 'twrnc';
import { useTheme } from './useTheme';
import tailwind from './tailwind';

export const useStyle = (tw?: ClassInput) => {
  useDeviceContext(tailwind);
  const { text, border, bg } = useTheme();
  return [tailwind.style(text, border, bg), tailwind.style(tw)];
};
