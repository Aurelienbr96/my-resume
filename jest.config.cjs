module.exports = async () => {
    process.env.TZ = 'GMT'
  }
  module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    verbose: true,
    testEnvironmentOptions: {
      url: 'http://localhost/',
    },
    moduleNameMapper: {
      '\\.svg': '<rootDir>/src/__mocks__/svgrMock.tsx',
      '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/src/__mocks__/fileMock.tsx',
    },
    setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
    moduleDirectories: ["node_modules", "src"],
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    // https://stackoverflow.com/questions/72187128/react-jest-tests-fails-with-react-dnd-syntaxerror-unexpected-token-export
    // https://jestjs.io/fr/docs/configuration#transformignorepatterns-arraystring
  };
  