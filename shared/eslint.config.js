module.exports = {
  extends: 'eslint:recommended',
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    eqeqeq: ['error', 'always'],

    'max-depth': ['error', 6],
    'max-params': ['error', 3],
    complexity: ['error', 12]
  }
};
