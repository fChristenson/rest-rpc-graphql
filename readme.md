# REST vs RPC vs GraphQL

## What we will cover

- What is REST?
- What is RPC?
- What is GraphQL?
- When do we use what?

## Notes

REST (Representational state transfer) is one of the two most common API interfaces in web development and
the basic idea is that each api deals with a resource and we use the http protocol methods to express the
operation we want to perform on the resource.

This is great for public API's and when dealing with domain models.

RPC (Remote procedure call) is also very common in web development, you can think of RPC as being a method
you invoke with the help of a http call.

You run a function on some server and then the server responds with the results of running that function.

RPC is great for dealing with actions that may not strictly be tied to a domain model and it is very common
that companies mix REST and RPC style API's in their code.

GraphQL is a fairly new way of structuring an API and it build on the idea that the client can construct a
query to the server with the details of what data it wants to get back and the server converts the requested
data in to the shape the query is asking for.

You can think of GraphQL as being a database client and the server a database that takes a query and returns
a result.

GraphQL is a great choice if you are building an public API where multiple clients will need different shapes
of the data in the API or if you have multiple services you need to connect in to one big API.
