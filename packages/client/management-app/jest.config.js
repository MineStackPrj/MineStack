module.exports = {
  'roots': [
    '<rootDir>/src'
  ],
  'coverageDirectory'  : '<rootDir>/../../../coverage/client/management-app',
  'collectCoverageFrom': [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts'
  ],
  'setupFiles': [
    'react-app-polyfill/jsdom'
  ],
  'setupFilesAfterEnv': [
    '<rootDir>/setupTests.ts'
  ],
  'testMatch': [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'
  ],
  'testEnvironment': 'jsdom',
  'testRunner'     : '<rootDir>/../../../node_modules/jest-circus/runner.js',
  'transform'      : {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$'             : '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$'                                 : '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
  },
  'transformIgnorePatterns': [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  'modulePaths'     : [],
  'moduleNameMapper': {
    '^react-native$'                 : 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^@type-def-prj(.*)$'            : '<rootDir>/../../common/type-def-prj/src/$1'
  },
  'moduleFileExtensions': [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node'
  ],
  'watchPlugins': [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  'resetMocks': true
};
