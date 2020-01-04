module.exports = {
  "env": {
    "node": true,
    "browser": true,
    "mocha": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "parserOptions": {
    "arrowFunctions": true,
    "binaryLiterals": true,
    "blockBindings": true,
    "classes": true,
    "defaultParams": true,
    "destructuring": true,
    "forOf": true,
    "generators": true,
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralDuplicateProperties": true,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "octalLiterals": true,
    "sourceType": "module",
    "spread": true,
    "templateStrings": true,
    "globalReturn": true, // React JSX support
    "jsx": true
  },
  "plugins": ["react"],
  "rules": {
    "camelcase": 2,
    "comma-dangle": 2,
    "comma-style": [2, "last"],
    "consistent-this": [2, "self"],
    "curly": [2, "all"],
    "eol-last": 2,
    "eqeqeq": 2,
    "func-names": 2,
    "indent": [2, 2],
    "max-len": [2, 120, 2], // 2 spaces per tab, max 120 chars per line
    "new-cap": 2,
    "no-array-constructor": 2,
    "no-inner-declarations": [2, "both"],
    "no-mixed-spaces-and-tabs": 2,
    "no-new-object": 2,
    "no-shadow-restricted-names": 2,
    "no-trailing-spaces": [2, { "skipBlankLines": false }],
    "no-underscore-dangle": 0, // dangling underscores are fine
    "quotes": [2, "single", "avoid-escape"],
    "quote-props": [2, "consistent-as-needed"],
    "radix": 2,

    "semi": [2, "always"],
    "space-before-blocks": [2, "always"],
    "space-infix-ops": 2,
    "strict": [2, "global"],
    "vars-on-top": 2,

    "react/display-name": 1,
    "react/forbid-prop-types": 1,
    "jsx-quotes": 1,
    "react/jsx-boolean-value": 1,
    "react/jsx-closing-bracket-location": 1,
    "react/jsx-curly-spacing": 1,
    "react/jsx-max-props-per-line": 1,
    "react/jsx-no-duplicate-props": 1,
    "react/jsx-no-undef": 1,
    "react/jsx-sort-props": 1,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/jsx-wrap-multilines": 1,
    "react/no-danger": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-direct-mutation-state": 1,
    "react/no-multi-comp": 1,
    "react/no-set-state": 1,
    "react/no-unknown-property": 1,
    "react/react-in-jsx-scope": 1,
    "react/self-closing-comp": 1,
    "react/sort-comp": 1,
    "react/sort-prop-types": 1
  }
}