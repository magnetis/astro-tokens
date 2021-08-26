export default [
  {
    destination: 'radius/index.js',
    format: 'javascript/module-flat',
    filter: {
      attributes: {
        category: 'radii',
        item: 'radius',
      },
    },
  },
  {
    destination: 'radius/index.d.ts',
    format: 'typescript/module-flat-declarations',
    filter: {
      attributes: {
        category: 'radii',
        item: 'radius',
      },
    },
    options: {
      moduleName: 'radius',
    },
  },
];
