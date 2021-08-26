module.exports = {
  '**/*.ts?(x)': (filenames) => {
    const files = filenames.join(' ');

    return [`prettier --write ${files}`, `eslint --fix ${files}`, `tsc -p tsconfig.json`];
  },
  '**/*.js?(x)': (filenames) => {
    const files = filenames.join(' ');

    return [`prettier --write ${files}`, `eslint --fix ${files}`];
  },
};
