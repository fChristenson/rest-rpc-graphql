const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");

const authors = [
  {
    id: "1",
    name: "Amazing writer",
    createdAt: new Date().toISOString()
  }
];

const messages = [
  {
    id: "1",
    text: "This is my message",
    createdAt: new Date().toISOString(),
    authorId: "1"
  }
];

const schema = buildSchema(`
  type Author {
    id: ID!
    name: String!
    createdAt: String!
  }
  type Message {
    id: ID!
    text: String!
    createdAt: String!
    author: Author!
  }
  type Query {
    message(messageId: String!): Message
  }
`);

class OutgoingMessage {
  constructor(message) {
    this.id = message.id;
    this.text = message.text;
    this.createdAt = message.createdAt;
    this.authorId = message.authorId;
  }

  author() {
    // pretend we connected to another system to get this data
    return authors.find(a => a.id === this.authorId);
  }
}

const root = {
  message: ({ messageId }) => {
    // pretend we get the stored message data from our database
    const storedMessage = messages.find(m => m.id === messageId);
    return new OutgoingMessage(storedMessage);
  }
};

const app = express();

app.use(
  "/api/v1/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

module.exports = app;
