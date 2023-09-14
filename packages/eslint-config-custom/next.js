const { resolve } = require("node:path")

const project = resolve(process.cwd(), "tsconfig.json")

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project
  },
  globals: {
    React: true,
    JSX: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint-config-airbnb",
    "eslint-config-airbnb-typescript",
    "eslint-config-next",
  ].map(require.resolve),
  ignorePatterns: ["node_modules/", "dist/"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  rules: {
    "arrow-parens": ["error", "as-needed", { "requireForBlockBody": true }],
    "camelcase": 0,
    "jsx-a11y/anchor-has-content": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/no-noninteractive-tabindex": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        "controlComponents": ["Field"],
        "depth": 3
      }
    ],
    "max-len": ["error", 120, 4],
    "no-underscore-dangle": ["error", { "allowAfterThis": true }],
    "no-void": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "react/function-component-definition": [2, { "namedComponents": "arrow-function" }],
    "react/forbid-prop-types": 0,
    "react/jsx-fragments": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": 0,
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": 0,
    "react-hooks/rules-of-hooks": "error",
    "semi": ["error", "never"],
    "import/no-cycle": 0,
    "import/no-extraneous-dependencies": 0,
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "comma",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "comma",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/semi": ["error", "never"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ]
  }
}