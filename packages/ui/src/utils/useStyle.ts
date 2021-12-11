import { ClassInput } from 'twrnc/dist/esm/types';
import twrnc, { useDeviceContext } from 'twrnc';
import { useTheme } from './useTheme';

export const useStyle = (tw?: ClassInput) => {
  useDeviceContext(twrnc);
  const { text, border, bg } = useTheme();
  return [twrnc.style(text, border, bg), twrnc.style(tw)];
};
