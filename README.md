# @zakodium/eslint-config-graphql

Shared ESLint config for frontend and backend projects using GraphQL

## Installation

```console
npm i -D @zakodium/eslint-config-graphql eslint
```

`graphql` is also a peer dependency and would usually be in the dependencies of your project

```console
npm i graphql
```

## Usage

Create a `eslint.config.mjs` with the following contents:

```js
import graphql from '@zakodium/eslint-config-graphql';

export default [
  // You will probably extend other configs as well.
  ...graphql,
];
```

Create a `.graphqlrc` or `.graphqlconfig` file with your GraphQL configuration

Or alternatively, specify the options in the ESLint config:

```js
import graphql from '@zakodium/eslint-config-graphql';

export default [
  // You will probably extend other configs as well.
  ...graphql,
  {
    files: ['**/*.{gql,graphql}'],
    languageOptions: {
      parserOptions: {
        graphQLConfig: {
          schema: 'path/to/your/schema/**/*.{gql,graphql}',
          documents: 'path/to/your/operations/**/*.{gql,graphql}',
        },
      },
    },
  },
];
```

You can then customize the config for your project by changing rules in this file.
