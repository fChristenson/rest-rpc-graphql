const users = require("./src/users");
const client = require("./src/client");
const graph = require("./src/graph");

users.listen(3000);
client.listen(3001);
graph.listen(3002);
