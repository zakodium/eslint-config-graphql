import assert from 'node:assert';
import path from 'node:path';
import { test } from 'node:test';

import { ESLint } from 'eslint';

const eslint = new ESLint();

const results = await eslint.lintFiles(['test/**/*.{jsx,gql,graphql}']);

assert.strictEqual(results.length, 4, '4 graphql files should be linted');

const expectedErrors = {
  'operations/todos.gql': ['@graphql-eslint/require-selections'],
  'operations/users.jsx': [
    '@graphql-eslint/require-selections',
    '@graphql-eslint/no-unused-fragments',
    '@graphql-eslint/fields-on-correct-type',
  ],
};

const expectedWarnings = {
  'schema/Todo.graphql': [
    '@graphql-eslint/no-unused-fields',
    '@graphql-eslint/no-unused-fields',
    '@graphql-eslint/no-unused-fields',
  ],
  'schema/User.graphql': [
    '@graphql-eslint/no-unused-fields',
    '@graphql-eslint/no-unused-fields',
  ],
};

for (const result of results) {
  const relativePath = relativeFilePath(result.filePath);
  test(relativePath, () => {
    const expErrors = expectedErrors[relativePath];
    if (!expErrors) {
      assert.strictEqual(result.errorCount, 0);
    } else {
      assert.deepStrictEqual(
        result.messages.filter(isError).map(getId),
        expErrors,
      );
    }

    const expWarnings = expectedWarnings[relativePath];
    if (!expWarnings) {
      assert.strictEqual(result.warningCount, 0);
    } else {
      assert.deepStrictEqual(
        result.messages.filter(isWarning).map(getId),
        expWarnings,
      );
    }
  });
}

function relativeFilePath(filePath) {
  return path.relative(import.meta.dirname, filePath);
}

function isError(message) {
  return message.severity === 2;
}

function isWarning(message) {
  return message.severity === 1;
}

function getId(message) {
  return message.ruleId;
}
