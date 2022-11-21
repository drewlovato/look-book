import { gql } from "@apollo/client";

export const QUERY_PROFILES = gql`
  query allUsers {
    users {
      _id
      name
      books
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      books
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      books
    }
  }
`;
