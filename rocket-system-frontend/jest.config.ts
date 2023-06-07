/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  preset: "ts-jest",
  clearMocks: true,
  coverageProvider: "v8",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverageFrom: [
    "src/components/*.tsx",
  ],
  testEnvironment: "jsdom",
  moduleNameMapper: {
/*     "^react-i18next$": "<rootDir>/src/components/__tests__/mocks/react-i18next.ts", */
    "\\.(css|less|scss|svg)$":
      "<rootDir>/src/components/__tests__/mocks/styleMock.ts"
  },
};
