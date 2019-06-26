module.exports = {
  // We're stricter than the default config, mostly. We'll override a few rules
  // and then enable some React specific ones.
  rules: {
    'accessor-pairs': 0,
    'brace-style': ['error', '1tbs'],
    'comma-dangle': ['error', 'always-multiline'],
    'consistent-return': 0,
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eol-last': 'error',
    eqeqeq: ['error', 'allow-null'],
    indent: 0,
    'jsx-quotes': ['error', 'prefer-double'],
    'keyword-spacing': ['error', { after: true, before: true }],
    'no-bitwise': 0,
    'no-inner-declarations': ['error', 'functions'],
    'no-multi-spaces': 'error',
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-shadow': 'error',
    'no-unused-expressions': 'error',
    'no-unused-vars': ['error', { args: 'none' }],
    'no-use-before-define': ['error', { functions: false, variables: false }],
    'no-useless-concat': 0,
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'space-before-blocks': 'error',
    'space-before-function-paren': 0,
    'valid-typeof': ['error', { requireStringLiterals: true }],

    // We apply these settings to files that should run on Node.
    // They can't use JSX or ES6 modules, and must be in strict mode.
    // They can, however, use other ES6 features.
    // (Note these rules are overridden later for source files.)
    'no-var': 'error',
    strict: 'error',

    // React & JSX
    // Our transforms set this automatically
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-no-undef': 'error',
    // We don't care to do this
    'react/jsx-sort-prop-types': 0,
    'react/jsx-space-before-closing': 'error',
    'react/jsx-uses-react': 'error',
    'react/no-is-mounted': 0,
    // This isn't useful in our test code
    'react/react-in-jsx-scope': 'error',
    'react/self-closing-comp': 'error',
    // We don't care to do this
    'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],

    // Prevent for...of loops because they require a Symbol polyfill.
    // You can disable this rule for code that isn't shipped (e.g. build scripts and tests).
    'no-for-of-loops/no-for-of-loops': 'error',

    // CUSTOM RULES
    // the second argument of warning/invariant should be a literal string
    'react-internal/no-primitive-constructors': 'error',
    'react-internal/no-to-warn-dev-within-to-throw': 'error',
    'react-internal/warning-and-invariant-args': 'error',
  },
};
