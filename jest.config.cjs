module.exports = async () => {
    process.env.TZ = 'GMT'
  }
  module.exports = {
    preset: 'ts-jest',
    verbose: true,
    testEnvironmentOptions: {
      url: 'http://localhost/',
    },
    moduleDirectories: ["node_modules", "src"],
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    // https://stackoverflow.com/questions/72187128/react-jest-tests-fails-with-react-dnd-syntaxerror-unexpected-token-export
    // https://jestjs.io/fr/docs/configuration#transformignorepatterns-arraystring
  };
  