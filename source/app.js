import express from "express";
import dbConnect from "./config/dbconnect.js";
import routes from "./routes/index.js";

const con = await dbConnect(); // Criando uma conexão com o banco de dados

con.on("error", (err) => {
    console.log("Erro ao conectar ao banco de dados: ", err);
}); // error está na lista de eventos possíveis listados no mongoose

con.once("open", () => {
    console.log("Conecatado com o banco.");
}); // open está na lista de eventos possíveis listados no mongoose

const app = express(); // Criando uma instância do express

routes(app); // Iniciando o arquivo inicial de rotas da aplização

export default app;
