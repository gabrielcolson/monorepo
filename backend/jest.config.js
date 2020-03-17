// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: path.join(__dirname, 'test', '__helpers', 'environment.js'),
};
