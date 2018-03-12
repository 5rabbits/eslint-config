module.exports = {
  extends: ['airbnb'],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'never',
      functions: 'never',
    }],
    'function-paren-newline': ['error', 'consistent'],
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
    }],
    'no-mixed-operators': 'off',
    'object-curly-newline': ['error', {
      consistent: true,
    }],
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': ['error', {
      extensions: ['.js', '.jsx', '.tsx'],
    }],
    'react/require-default-props': 'off',
    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'lifecycle',
        'everything-else',
        'render',
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'defaultProps',
          'state',
          'instance-variables',
          'constructor',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          'componentDidCatch',
        ],
      },
    }],
    'react/sort-prop-types': 'error',
    'semi': ['error', 'never'],
  },
}
