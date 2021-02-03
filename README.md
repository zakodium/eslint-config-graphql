# eslint-config-graphql

Shared ESLint config for frontend and backend projects using graphql

## Installation

```console
npx i -D @zakodium/eslint-config-graphql eslint prettier
```

`graphql` is also a peer dependency and would usually be in the dependencies of your project

```console
npm i graphql
```

## Usage

Create a `.eslintrc.yml` with the following contents:

```yml
extends: zakodium-graphql
```

Create a `.graphqlrc` or `.graphqlconfig` file with your graphql configuration

Or alternatively, specify the options in the eslint config

```yml
extends: zakodium-graphql
overrides:
    files:
      - *.graphql
    parserOptions:
      schema: path/to/your/schema/**/*.graphql
      operations path/to/your/operations/**/*.graphql

```

You can then customize the config for your project by changing rules in this file.


