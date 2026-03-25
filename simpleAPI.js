const { log } = require('console');
const http = require('http');
const users = [
    { id: 1, name: 'Alice', age: 30, city: 'New York' },
    { id: 2, name: 'Bob', age: 25, city: 'Los Angeles' },
    { id: 3, name: 'Charlie', age: 35, city: 'Chicago' }
];
const server = http.createServer((req, res) => {
    console.log(`Received request: ${req.method} ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if(req.url === '/users') {
        res.end(JSON.stringify(users));
    }
    else if(req.url.startsWith('/users/')) {
        const userId = req.url.split('/')[2];
        if(isNaN(userId)) {
            res.statusCode = 400;
            return res.end(JSON.stringify({ error: 'Invalid User ID' }));
        }
        const user = users.find(u => u.id === parseInt(userId));
        if(!user) {
            res.statusCode = 404;
            return res.end(JSON.stringify({ error: 'User Not Found' }));
        }
        res.end(JSON.stringify(user));
    }
    else{
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});
server.listen(3000, () => {
    console.log('Server running on port 3000');
});