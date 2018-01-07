module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  extends: ['airbnb'],
  plugins: ['react', 'jsx-a11y'],
  rules: {
    'class-methods-use-this': 'off',
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
  globals: {},
};
