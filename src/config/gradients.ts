export default [
  {
    destination: 'gradients/index.js',
    format: 'javascript/module',
    filter: {
      attributes: {
        category: 'gradient',
      },
    },
  },
  {
    destination: 'gradients/index.d.ts',
    format: 'typescript/module-declarations',
    filter: {
      attributes: {
        category: 'gradient',
      },
    },
  },
];
