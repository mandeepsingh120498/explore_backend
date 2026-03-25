const http = require("http");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(`
        <html>
        <head> 
            <title>Response Example</title>
        </head>
        <body>
            <h1>Hello, World!</h1>
            <p>This is a response from the server.</p>
        </body>
        </html>
        `);
});
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
