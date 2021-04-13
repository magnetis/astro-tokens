export const sizes = {
  verySmall: 'very-small',
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const;

type SizesKeys = keyof typeof sizes;
type Size = typeof sizes[SizesKeys];

export type { Size };
