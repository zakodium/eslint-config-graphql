import assert from 'node:assert';

import { ESLint } from 'eslint';

const eslint = new ESLint();
const formatter = await eslint.loadFormatter('stylish');

const result = await eslint.lintFiles(['test/**/*.{gql,graphql}']);

assert.strictEqual(result.length, 3, '3 graphql files should be linted');

const errorCount = result.reduce(
  (prev, current) => prev + current.errorCount,
  0,
);
assert.strictEqual(
  errorCount,
  0,
  `graphql files should not have any errors: ${formatter.format(result)}`,
);
