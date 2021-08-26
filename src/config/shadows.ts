export default [
  {
    destination: 'shadows/index.js',
    format: 'shadow/styled',
    filter: {
      attributes: {
        category: 'effect',
        type: 'shadow',
      },
    },
  },
  {
    destination: 'shadows/index.d.ts',
    format: 'shadow/types',
    filter: {
      attributes: {
        category: 'effect',
        type: 'shadow',
      },
    },
    options: {
      isStaticType: true,
      moduleName: 'shadows',
    },
  },
];
