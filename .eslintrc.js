module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true
  },
  extends: [
    'eslint:recommended'
  ],
  plugins: [
    'svelte3',
    '@typescript-eslint'
  ],
  settings: {
    'svelte3/typescript': () => require('typescript')
  },
  ignorePatterns: [
    'public/build/'
  ],
  overrides: [
    {
      files: [ '**/*.svelte' ],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    semi: [ 'error', 'never' ], // remove ;
    quotes: [ 'error', 'single' ], // " -> '
    indent: [ 'error', 2 ] // indent with 2 spaces
  }
}
