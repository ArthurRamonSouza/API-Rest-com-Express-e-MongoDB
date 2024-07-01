import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (app) => {
    app.route().get("/", (req, res) => {
        res.status(200).send("Usando o express");
    }); // Rota padrão do servidor

    app.use(express.json(), livros, autores); // Atribuindo as rotas dos modelos
};

export default routes;
