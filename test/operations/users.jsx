import { useQuery } from '#graphql_lib';
import { graphql } from '#somewhere';

const UsersDoc = graphql`
  fragment user on User {
    name
  }

  fragment unused on User {
    id
  }

  query Users {
    users {
      id
      ...user
      xxx
    }
  }
`;

export function Users() {
  const { users } = useQuery(UsersDoc);
  return users;
}
