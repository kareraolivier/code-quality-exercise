module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["eslint:recommended", "plugin:unicorn/recommended"],
  ignorePatterns: [".eslintrc.js"],
  plugins: ["unicorn"],
  rules: {},
};
