const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        res.writeHead(204);
        return res.end();
    }

    let statusCode = 200;
    let mensagem = '';

    if (req.url === '/') {
        mensagem = 'Bem-vindo à página inicial!';
    } 
    else if (req.url === '/sobre') {
        mensagem = 'Esta é a página sobre nós!';
    } 
    else if (req.url === '/info') {
        mensagem = 'Esta página é sobre nossas informações';
        
    } else if(req.url === '/abc'){
        mensagem = 'Vem vindo ao ABC da Amazonia';
    }
    else {
        statusCode = 404;
        mensagem = 'Página não encontrada.';
    }

    // Escrever resposta
    res.writeHead(statusCode, { 'Content-Type': 'text/plain' });
    res.end(mensagem);

    // Criar mensagem de log
    const logMessage = `Rota acessada: ${req.url} - Status: ${statusCode}\n`;

    // Exibir log no terminal
    console.log(logMessage.trim());

});

server.listen(3002, () => {
    console.log('Servidor rodando em http://localhost:3001');
});
