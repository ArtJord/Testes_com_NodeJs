const http = require("http");
const fs = require("fs");
const path = require("path");
const { saudacao, horaAtual } = require("./index");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        const filePath = path.join(__dirname, "public", "index.html");
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Erro ao carregar a página.");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else if (req.url === "/style.css") {
        const filePath = path.join(__dirname, "public", "style.css");
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Erro ao carregar o CSS.");
            } else {
                res.writeHead(200, { "Content-Type": "text/css" });
                res.end(data);
            }
        });
    } else if (req.url === "/hora") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Hora atual: ${horaAtual()}`);
    } else if (req.url.startsWith("/ola")) {
        const url = new URL(req.url, `http://${req.headers.host}`);
        const nome = url.searchParams.get("nome") || "visitante";
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(saudacao(nome));
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Página não encontrada");
    }
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
