import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String, $email: String, $password: String) {
    addUser(name: $username, email: $email, password: $password) {
      token {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String, $password: String) {
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
    $bookId: ID
    $author: [String]
    $description: String
    $title: String
    $image: String
    $link: String
  ) {
    savedBook(
      bookId: $bookId
      author: $author
      description: $description
      title: $title
      image: $image
      link: $link
    ) {
      _id
      usernameemail
      password
      bookCount
      savedBooks {
        bookId
        author
        description
        title
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      password
      bookCount
      savedBook {
        bookId
        author
        description
        title
        image
        link
      }
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser($userId: String) {
    removeUser(userId: $userId) {
      userId
    }
  }
`;
