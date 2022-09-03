/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const assetsKey =
  '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$'

const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', 'config/tests'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    [assetsKey]: 'ts-jest',
  },
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    [assetsKey]: 'ts-jest',
  },
}

export default config
