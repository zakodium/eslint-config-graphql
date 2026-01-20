import { defineConfig } from 'eslint/config';
import cheminfo from 'eslint-config-cheminfo/base';

import graphql, { processor } from './index.js';

export default defineConfig(
  cheminfo,
  graphql,
  {
    files: ['test/**/*.jsx'],
    processor,
  },
  {
    files: ['test/**/*.{gql,graphql}'],
    languageOptions: {
      parserOptions: {
        graphQLConfig: {
          schema: './test/schema/**/*.{gql,graphql}',
          documents: './test/operations/**/*.{gql,graphql}',
        },
      },
    },
  },
);
