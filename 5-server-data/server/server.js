var jsonServer = require('json-server');

var animals={animals:[
    {
      "id": 1,
      "species": "cat",
      "name": "fluffy",
      "position": 0,
      "key": "C"
    },
    {
      "id": 2,
      "species": "dog",
      "name": "fido",
      "position": 0,
      "key": "D"
    }
  ]}

var server = jsonServer.create();
server.use(jsonServer.defaults());
var router = jsonServer.router(animals);
server.use(router);
server.listen(3030);