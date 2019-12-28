module.exports = {
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },

  extends: ['airbnb-typescript/base'],

  plugins: ['jest'],

  rules: {
    // some props require dangle
    'no-underscore-dangle': 'off',

    // sometimes it is better
    'no-nested-ternary': 'off',

    // controlled with prettier
    'arrow-parens': 'off',
    'function-paren-newline': 'off',

    // disabled for condition && someFunc()
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',

    // backend developers like _, no need to transform data all the time
    camelcase: 'off',
    'keyword-spacing': 'off',

    // Has some bugs
    'prefer-destructuring': 'off',

    // just the formatting issues, prettier does all the job
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'spaced-comment': 'off',
    'lines-between-class-members': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],

    // increase max line length to 100
    'max-len': [
      'error',
      120,
      {
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // redux actions do not work well with this
    'import/prefer-default-export': 'off',
  },
};
