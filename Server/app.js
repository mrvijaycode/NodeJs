

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello world');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify({"id":1,"Computers":["SQL", ".Net", "SharePoint"]}));
        res.end();
    }
});

server.on('connection', (socket) => {
    console.log('New connection..');
});

server.listen(3000);
console.log('Listening on port 3000..');

