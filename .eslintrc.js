module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["eslint:recommended", "prugin:unicorn/recomended"],
  rules: {
    "no-console": [
      "warn",
      {
        allow: ["error", "warn", "info"],
      },
    ],
    eqeqeq: ["error", "always", { null: "ignore" }],
    "sort-imports": "off",
    "max-lines-per-function": ["warn", 100],
    "no-use-before-define": "error",
  },
  overrides: [
    {
      files: ["*.js", "*.jsx"],

      extends: [],
      rules: {},
    },
  ],
  plugins: ["unicorn"],
};
