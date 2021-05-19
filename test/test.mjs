import assert from 'assert';
import { ESLint } from 'eslint';

const eslint = new ESLint({ overrideConfigFile: 'index.js' });
const formatter = await eslint.loadFormatter('stylish');

const result = await eslint.lintFiles([
  'test/schema/*.graphql',
  'test/operations/*.graphql',
]);

const errorCount = result.reduce(
  (prev, current) => prev + current.errorCount,
  0,
);
assert.strictEqual(
  errorCount,
  0,
  `graphql files should not have any errors: ${formatter.format(result)}`,
);
