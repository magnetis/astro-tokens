const primary = {
  poppins: 'Poppins-Regular',
  poppinsMedium: 'Poppins-Medium',
  poppinsSemiBold: 'Poppins-SemiBold',
  poppinsBold: 'Poppins-Bold',
  poppinsBlack: 'Poppins-Black',
} as const;
type PrimaryKeys = keyof typeof primary;
type Primary = typeof primary[PrimaryKeys];

const secondary = {
  lato: 'Lato-Regular',
  latoBold: 'Lato-Bold',
} as const;
type SecondaryKeys = keyof typeof secondary;
type Secondary = typeof secondary[SecondaryKeys];

export const fonts = { ...primary, ...secondary };

export type { Primary, Secondary };
