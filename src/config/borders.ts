export default [
  {
    destination: 'borders/index.js',
    format: 'javascript/module-flat',
    filter: {
      attributes: {
        category: 'borders',
        item: 'strokeWeight',
      },
    },
  },
  {
    destination: 'borders/index.d.ts',
    format: 'typescript/module-flat-declarations',
    filter: {
      attributes: {
        category: 'borders',
        item: 'strokeWeight',
      },
    },
    options: {
      moduleName: 'borders',
    },
  },
];
