export default [
  {
    destination: 'typography/index.js',
    format: 'font/css',
    filter: {
      attributes: {
        category: 'typography',
      },
    },
  },
  {
    destination: 'typography/index.d.ts',
    format: 'font/ts-declarations',
    filter: {
      attributes: {
        category: 'typography',
      },
    },
  },
];
