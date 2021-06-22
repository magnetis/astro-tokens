const earth = {
  earth100: '#b8fcac',
  earth200: '#9cf184',
  earth300: '#88e967',
  earth400: '#74e24a',
  earth500: '#56b53f',
  earth600: '#469d39',
  earth700: '#388833',
  earth800: '#276f2d',
  earth900: '#145327',
  earth1000: '#084222',
} as const;
type EarthKeys = keyof typeof earth;
type Earth = typeof earth[EarthKeys];

const mars = {
  mars100: '#ffcace',
  mars200: '#f6b1b5',
  mars300: '#ea9297',
  mars400: '#dd676b',
  mars500: '#d45459',
  mars600: '#ac3c40',
  mars700: '#9a3135',
  mars800: '#7b1e22',
  mars900: '#651115',
  mars1000: '#500508',
} as const;
type MarsKeys = keyof typeof mars;
type Mars = typeof mars[MarsKeys];

const moon = {
  moon100: '#f6f7f8',
  moon200: '#e9eef2',
  moon300: '#afbec9',
  moon400: '#8296a4',
  moon500: '#597183',
  moon600: '#495c69',
  moon700: '#3f4c55',
  moon800: '#384248',
  moon900: '#32383c',
  moon1000: '#1c2124',
} as const;
type MoonKeys = keyof typeof moon;
type Moon = typeof moon[MoonKeys];

const space = {
  space100: '#ffffff',
  space200: '#f5f5f5',
  space300: '#e5e5e5',
  space400: '#c5c5c5',
  space500: '#a5a5a5',
  space600: '#858585',
  space700: '#656565',
  space800: '#454545',
  space900: '#353535',
  space1000: '#202020',
} as const;
type SpaceKeys = keyof typeof space;
type Space = typeof space[SpaceKeys];

const sun = {
  sun100: '#fffec1',
  sun200: '#fbee88',
  sun300: '#f7e05b',
  sun400: '#f4d330',
  sun500: '#f1c500',
  sun600: '#cea800',
  sun700: '#b19100',
  sun800: '#8f7600',
  sun900: '#685500',
  sun1000: '#4b3e00',
} as const;
type SunKeys = keyof typeof sun;
type Sun = typeof sun[SunKeys];

const uranus = {
  uranus100: '#a6f7ff',
  uranus200: '#86e3f9',
  uranus300: '#67cff3',
  uranus400: '#3db5eb',
  uranus500: '#159ce4',
  uranus600: '#147ec1',
  uranus700: '#1663a0',
  uranus800: '#16518b',
  uranus900: '#183a6e',
  uranus1000: '#182758',
} as const;
type UranusKeys = keyof typeof uranus;
type Uranus = typeof uranus[UranusKeys];

const venus = {
  venus100: '#ffc3f9',
  venus200: '#f0a0e9',
  venus300: '#e78ade',
  venus400: '#e078d6',
  venus500: '#c763ba',
  venus600: '#ab4b9a',
  venus700: '#993c85',
  venus800: '#842a6d',
  venus900: '#6b1550',
  venus1000: '#5c083f',
} as const;
type VenusKeys = keyof typeof venus;
type Venus = typeof venus[VenusKeys];

type Color = Earth | Mars | Moon | Space | Sun | Uranus | Venus;

export const colors = {
  ...earth,
  ...mars,
  ...moon,
  ...space,
  ...sun,
  ...uranus,
  ...venus,
};

export type { Color };
