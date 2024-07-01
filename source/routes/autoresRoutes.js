import express from "express";
import AutorController from "../controllers/autorController";

const routes = express.Router;

// Não possui parenteses pois é só uma referência à função e não uma chamada de função
routes.get("/autores", AutorController.listarAutores);
routes.post("/autores", AutorController.listarAutores);
routes.get("/autores/:id", AutorController.listarAutore);
routes.put("autores/:id", AutorController.atualizarAutore);
routes.delete("autores/:id", AutorController.deletarAutore);

export default routes;
