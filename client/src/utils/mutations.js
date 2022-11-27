import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token {
        user {
          _id
          username
        }
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation savedBook(
    $bookId: String!
    $author: [String]
    $description: String
    $title: String!
    $image: String
    $link: String
  ) {
    savedBook(
      bookId: $bookId
      authors: $authors
      description: $description
      title: $title
      image: $image
      link: $link
    ) {
      _id
      username
      email
      password
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      password
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser($username: String!, $email: String!, $password: String!) {
    removeUser(username: $username, email: $email, password: $password) {
      token {
        _id
        username
      }
    }
  }
`;
