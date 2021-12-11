import { ClassInput } from 'twrnc/dist/esm/types';

interface BaseProps {
  tw?: ClassInput;
}

type ThemeSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';

export type { BaseProps, ThemeSize };
