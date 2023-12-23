module.exports = {
  env: {
    node: true,
    es2022: true,
    commonjs: true,
    jest: true,
  },
  extends: ["airbnb", "airbnb-typescript", "plugin:react/recommended", "eslint-config-prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "prettier", "react"],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        bracketSpacing: true,
        tabWidth: 2,
        singleQuote: false,
      },
    ],
    "no-unused-vars": "warn",
    "no-console": "off",
    "func-names": "off",
    "no-plusplus": "off",
    "no-process-exit": "off",
    "class-methods-use-this": "off",
    "import/prefer-default-export": ["off"],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".tsx"],
      },
    ],
  },
};
