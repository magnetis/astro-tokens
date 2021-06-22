import { colors } from '../colors';
import type { Color } from '../colors';

const {
  earth200,
  earth500,
  uranus400,
  uranus500,
  uranus600,
  moon400,
  moon700,
  moon1000,
  venus400,
  venus700,
  mars300,
  mars400,
} = colors;

type GradientColors = Color | '#fff56a' | '#ffd265' | '#bac8d1' | '#d991e0' | '#00c6d4' | '#00ea60';

type GradientColor = [GradientColors, GradientColors] | [GradientColors, GradientColors, GradientColors];

type Gradient = {
  sombrero: GradientColor;
  hoag: GradientColor;
  pinwheel: GradientColor;
  blackHole: GradientColor;
  milkyWay: GradientColor;
  whirlpool: GradientColor;
  nebulosa: GradientColor;
  andromeda: GradientColor;
  centaurus: GradientColor;
  cartwheel: GradientColor;
  mayall: GradientColor;
};

type GradientID = keyof Gradient;

export const gradients = {
  sombrero: [uranus400, earth200],
  hoag: ['#fff56a', '#ffd265'],
  pinwheel: [moon400, '#bac8d1'],
  blackHole: [moon700, moon1000],
  milkyWay: [uranus500, venus400],
  whirlpool: [earth200, earth500],
  nebulosa: ['#d991e0', '#00c6d4', '#00ea60'],
  andromeda: [mars300, venus400],
  centaurus: [venus400, venus700],
  cartwheel: [uranus600, uranus400],
  mayall: [mars300, mars400],
} as const;

export type { Gradient, GradientColor, GradientID };
