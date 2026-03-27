import { layout } from '@/theme/layout';
import { TextStyle } from 'react-native';
import { spacing } from '@/theme/spacing';

export const palette = {
  glassWhite: 'rgba(255, 255, 255, 0.15)', // Glass effect base
  glassBorder: 'rgba(255, 255, 255, 0.3)',
  purpleDeep: '#0F0C29',
  purpleMid: '#302b63',
  purpleLight: '#24243e',
  accent: '#a29bfe',
  white: '#FFFFFF',
  red: '#ff6b6b',
  purplePrimary: '#473472',
  purpleDark: '#1a1a2e',
  black: '#000',
  green: '#08CB00',
};

export const borderRadii = {
  s: 4,
  m: 8,
  l: 12,
  xl: 24,
};
export const typography: {
  h1: { fontSize: number; fontWeight?: TextStyle['fontWeight'] };
  body: { fontSize: number; fontWeight?: TextStyle['fontWeight'] };
} = {
  h1: {
    fontSize: 24,
    fontWeight: '700',
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
  },
};

export const theme = {
  colors: {
    primary: palette.accent,
    background: [palette.purpleDeep, palette.purpleMid, palette.purpleLight], // Gradient Array
    glass: palette.glassWhite,
    glassBorder: palette.glassBorder,
    text: palette.white,
    black: palette.black,
    green: palette.green,
    progress: palette.accent,
  },
  spacing,
  borderRadii,
  layout,
  typography,
};
