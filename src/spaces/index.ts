export const spaces = {
  xxxsmall: '2px',
  xxsmall: '4px',
  xsmall: '8px',
  medium: '12px',
  large: '16px',
  xlarge: '28px',
  xxlarge: '36px',
  xxxlarge: '48px',
  huge: '72px',
} as const;

type SpacesKeys = keyof typeof spaces;
type Space = typeof spaces[SpacesKeys];

export type { Space };
