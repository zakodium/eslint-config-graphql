import cheminfo from 'eslint-config-cheminfo';

import graphql from './index.js';

export default [
  ...cheminfo,
  ...graphql,
  {
    files: ['**/*.{gql,graphql}'],
    languageOptions: {
      parserOptions: {
        graphQLConfig: {
          schema: './test/schema/**/*.{gql,graphql}',
          documents: './test/operations/**/*.{gql,graphql}',
        },
      },
    },
  },
];
