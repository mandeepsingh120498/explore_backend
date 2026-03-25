const http = require('http');
const port = process.argv[2] || 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Testing command line input for port number');
});
server.listen(port, () => {console.log(`Server running on port ${port}`)});