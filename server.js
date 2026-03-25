const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type':'application/json'});
    res.end(JSON.stringify({message: 'Hello World'}));
})

server.listen(3000, () =>{console.log(`Server running on http:localhost:3000`)});


// Creating multiple servers in single file.

const server2 = http.createServer((req, res) => {
    res.writeHead(200, {'content-type':'application/json'});
    res.end(JSON.stringify({message: 'Hello World from server 2'}));
})

server2.listen(3001, () =>{console.log(`Server running on http:localhost:3001`)});