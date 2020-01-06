const express = require("express");

const app = express();

app.use(express.json());

const User = name => {
  return {
    id: Math.random().toString(),
    name
  };
};

const users = [User("foo"), User("bar"), User("baz")];

const findUser = req => {
  return users.find(u => u.id === req.params.id);
};

app.get("/api/v1/users", (req, res) => {
  res.json(users);
});

app.post("/api/v1/users", (req, res) => {
  const { name } = req.body;

  const user = User(name);
  users.push(user);

  res.json(user);
});

app.put("/api/v1/users/:id", (req, res) => {
  const { name } = req.body;

  const user = findUser(req);
  user.name = name;

  res.json(user);
});

app.delete("/api/v1/users/:id", (req, res) => {
  const user = findUser(req);

  users.splice(user, 1);

  res.json(user);
});

app.get("/api/v1/users/:id", (req, res) => {
  res.json(findUser(req));
});

module.exports = app;
