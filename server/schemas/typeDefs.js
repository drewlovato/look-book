const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    bookCount: Int
    savedBook: [Book]
  }

  type Book {
    bookId: String
    author: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user: [User]
    me: [User]
  }

  type Mutation {
    addUser(name: String, email: String, password: String): Auth
    login(email: String, password: String): Auth

    savedBook(
      bookId: ID
      author: [String]
      description: String
      title: String
      image: String
      link: String
    ): User
    removeBook(bookId: String): User
    removeUser(userId: String): User
  }
`;

module.exports = typeDefs;
