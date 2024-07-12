import * as graphqlEslint from '@graphql-eslint/eslint-plugin';

export default [
  {
    files: ['**/*.{gql,graphql}'],
    plugins: {
      '@graphql-eslint': graphqlEslint,
    },
    languageOptions: {
      parser: {
        ...graphqlEslint,
        // Necessary to avoid an error when ESLint is run with --cache.
        // https://github.com/dimaMachina/graphql-eslint/issues/2178
        // TODO: remove this when fixed in the package.
        meta: {
          name: '@graphql-eslint',
        },
      },
    },
    rules: {
      '@graphql-eslint/alphabetize': 'off',
      // Enforce all comments to be block comments
      '@graphql-eslint/description-style': 'off',
      '@graphql-eslint/executable-definitions': 'off',
      '@graphql-eslint/fields-on-correct-type': 'error',
      '@graphql-eslint/fragments-on-composite-type': 'error',
      // This rule is deactivated because it is not compatible with
      // naming input types PascalCase but mutations camelCase
      // https://github.com/dotansimha/graphql-eslint/blob/a2b71f6be17ff57614f57b3648ae2256cc834ea9/docs/rules/input-name.md
      '@graphql-eslint/input-name': 'off',
      '@graphql-eslint/known-argument-names': 'error',
      '@graphql-eslint/known-directives': 'error',
      '@graphql-eslint/known-fragment-names': 'error',
      '@graphql-eslint/known-type-names': 'error',
      '@graphql-eslint/lone-anonymous-operation': 'error',
      '@graphql-eslint/lone-schema-definition': 'error',
      '@graphql-eslint/match-document-filename': 'off',
      '@graphql-eslint/naming-convention': [
        'error',
        {
          ObjectTypeDefinition: 'PascalCase',
          FieldDefinition: 'camelCase',
          InputObjectTypeDefinition: 'PascalCase',
          InputValueDefinition: 'camelCase',
          EnumTypeDefinition: 'PascalCase',
          EnumValueDefinition: 'UPPER_CASE',
          InterfaceTypeDefinition: 'PascalCase',
          UnionTypeDefinition: 'PascalCase',
          ScalarTypeDefinition: 'PascalCase',
          OperationDefinition: 'PascalCase',
          Argument: 'camelCase',
          FragmentDefinition: 'camelCase',
          allowLeadingUnderscore: true,
          allowTrailingUnderscore: false,
        },
      ],

      '@graphql-eslint/no-anonymous-operations': 'error',
      '@graphql-eslint/no-case-insensitive-enum-values-duplicates': 'error',
      '@graphql-eslint/no-deprecated': 'warn',
      '@graphql-eslint/no-duplicate-fields': 'error',
      '@graphql-eslint/no-hashtag-description': 'error',
      '@graphql-eslint/no-fragment-cycles': 'error',
      '@graphql-eslint/no-root-type': 'off',
      // What errors does this rule prevent?
      '@graphql-eslint/no-scalar-result-type-on-mutation': 'off',
      '@graphql-eslint/no-typename-prefix': 'error',
      '@graphql-eslint/no-undefined-variables': 'error',
      '@graphql-eslint/no-unreachable-types': 'error',
      '@graphql-eslint/no-unused-fields': 'warn',
      '@graphql-eslint/no-unused-fragments': 'error',
      '@graphql-eslint/no-unused-variables': 'error',

      '@graphql-eslint/overlapping-fields-can-be-merged': 'error',
      '@graphql-eslint/possible-fragment-spread': 'error',
      '@graphql-eslint/possible-type-extension': 'error',
      '@graphql-eslint/provided-required-arguments': 'error',

      '@graphql-eslint/relay-arguments': 'off',
      '@graphql-eslint/relay-connection-types	': 'off',
      '@graphql-eslint/relay-edge-types': 'off',
      '@graphql-eslint/relay-page-info': 'off',

      '@graphql-eslint/require-deprecation-date': 'off',
      '@graphql-eslint/require-deprecation-reason': 'error',
      '@graphql-eslint/require-description': 'off',
      '@graphql-eslint/require-field-of-type-query-in-mutation-result': 'off',
      '@graphql-eslint/require-id-when-available': 'error',

      '@graphql-eslint/scalar-leafs': 'error',
      '@graphql-eslint/selection-set-depth': 'off',
      '@graphql-eslint/strict-id-in-types': 'off',

      '@graphql-eslint/unique-argument-names': 'error',
      '@graphql-eslint/unique-directive-names': 'error',
      '@graphql-eslint/unique-directive-names-per-location': 'error',
      '@graphql-eslint/unique-enum-value-names': 'error',
      '@graphql-eslint/unique-field-definition-names': 'error',
      '@graphql-eslint/unique-fragment-name': 'error',
      '@graphql-eslint/unique-input-field-names': 'error',
      '@graphql-eslint/unique-operation-name': 'error',
      '@graphql-eslint/unique-operation-types': 'error',
      '@graphql-eslint/unique-type-names': 'error',
      '@graphql-eslint/unique-variable-names': 'error',

      '@graphql-eslint/value-literals-of-correct-type': 'error',
      '@graphql-eslint/variables-are-input-types': 'error',
      '@graphql-eslint/variables-in-allowed-position': 'error',
      strict: 'off',
    },
  },
];
