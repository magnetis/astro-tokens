export default [
  {
    destination: 'sizes/index.js',
    format: 'javascript/module-flat',
    filter: {
      attributes: {
        category: 'sizes',
      },
    },
  },
  {
    destination: 'sizes/index.d.ts',
    format: 'typescript/module-flat-declarations',
    filter: {
      attributes: {
        category: 'sizes',
      },
    },
    options: {
      moduleName: 'sizes',
    },
  },
];
