export default [
  {
    destination: 'colors/index.js',
    format: 'javascript/es6',
    filter: {
      attributes: {
        category: 'color',
      },
    },
  },
  {
    destination: 'colors/index.d.ts',
    format: 'typescript/es6-declarations',
    filter: {
      attributes: {
        category: 'color',
      },
    },
    options: {
      isStaticType: true,
    },
  },
];
