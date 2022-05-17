export default {
  moduleFileExtensions: ['js', 'ts', 'json', 'node'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: ['<rootDir>/src/**/*.test.[jt]s'],
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['/node_modules/(?!change-case/)'],
};
