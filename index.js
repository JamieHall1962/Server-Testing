// https://github.com/JamieHall1962/Server-Testing/pull/1

const server = require('./server.js')

const port = process.env.PORT || 4400;

server.listen ({port}, () => {
  console.log (`server listening on port ${port}`);
});