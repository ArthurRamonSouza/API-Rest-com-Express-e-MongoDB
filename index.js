// import http from "http";
import "dotenv/config"
import app from "./source/app.js";

const PORT = 3000;

// Criando uma instância do servidor com http
// const rotas = {
//     "/":"Cabeçalho settado.\n",
// };

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end(rotas[req.url]);
// });

app.listen(PORT, () => {
    console.log("Servidor rodando na porta 3000");
});
