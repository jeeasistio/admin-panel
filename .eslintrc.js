module.exports = {
  env: {
    browser: true,
    es2021: true,
    amd: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['prettier', 'react'],
  rules: {
    'prettier/prettier': [
      'error',
      { endOfLine: 'auto' },
      { usePrettierrc: true }
    ],
    'no-unused-vars': ['warn'],
    'react/prop-types': 'off'
  }
}
