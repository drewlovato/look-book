const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    bookCount: INT
    savedBooks: [Book]
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
    profile: Profile
  }

  type Query {
    users: [User]
    user:(userId: ID): user
    me: User
  }

  type Mutation {
    addUser(name: String, email: String, password: String): Auth
    login(email: String, password: String): Auth

    savedBooks(bookId: ID, author: [String], description: String, title: String, image: String, link: String); User
    removeUser: User
    removeBook(bookId: String): User
  }
`;

module.exports = typeDefs;
