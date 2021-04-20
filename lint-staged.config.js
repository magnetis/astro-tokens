module.exports = {
  '**/*.ts?(x)': (filenames) => {
    const files = filenames.join(' ');

    return [`prettier --write ${files}`, `eslint --fix ${files}`, `tsc -p tsconfig.json --noEmit`];
  },
  '**/*.js?(x)': (filenames) => {
    const files = filenames.join(' ');

    return [`prettier --write ${files}`, `eslint --fix ${files}`];
  },
};
