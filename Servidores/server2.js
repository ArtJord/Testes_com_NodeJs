const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        res.writeHead(204);
        return res.end();
    }

    let filePath = '';
    let statusCode = 200;

    const viewsDir = path.join(__dirname, 'views');

    if (req.url === '/') {
        filePath = path.join(viewsDir, 'index.html');
    } 
    else if (req.url === '/sobre') {
        filePath = path.join(viewsDir, 'sobre.html');
    } 
    else if (req.url === '/info') {
        filePath = path.join(viewsDir, 'info.html');
    } 
    else if (req.url === '/abc') {
        filePath = path.join(viewsDir, 'abc.html');
    } 
    else {
        statusCode = 404;
        res.writeHead(statusCode, { 'Content-Type': 'text/plain' });
        res.end('404 - Página não encontrada');
        console.log(`Rota acessada: ${req.url} - Status: ${statusCode}`);
        return;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            statusCode = 500;
            res.writeHead(statusCode, { 'Content-Type': 'text/html' });
            res.end('<h1>Erro interno no servidor</h1>');
        } else {
            res.writeHead(statusCode, { 'Content-Type': 'text/html' });
            res.end(data);
        }

        // Exibir log no terminal
        console.log(`Rota acessada: ${req.url} - Status: ${statusCode}`);
    });

});

server.listen(3002, () => {
    console.log('Servidor rodando em http://localhost:3002');
});
