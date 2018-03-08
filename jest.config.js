// jest.config.js
module.exports = {
  transform: { "^.+\\.jsx?$": "<rootDir>/config/test-transformer.js" },
  testPathIgnorePatterns: ["/node_modules/", "/.cache/"]
};
