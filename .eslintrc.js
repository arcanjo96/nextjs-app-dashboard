module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'unused-imports', 'prettier'],
  env: {
    node: true,
    jest: true,
    jasmine: true,
  },
  rules: {
    'no-shadow': 'off',
    'no-param-reassign': ['error'],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['constructors'] },
    ],
    '@typescript-eslint/no-shadow': 'error',
    'unused-imports/no-unused-imports': 'error',
    'no-unused-vars': 'off', // disable rule from eslint
    '@typescript-eslint/no-unused-vars': [
      // enable from typescript-eslint
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: ['return', 'throw'] },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': 'error',
  },
};
