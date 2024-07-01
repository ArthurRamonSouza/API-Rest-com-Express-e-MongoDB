import express from "express";
import LivroController from "../controllers/livroController";

const routes = express.Router;

// Não possui parenteses pois é só uma referência à função e não uma chamada de função
// Express funciona com a precedência de rotas, ou seja, a ordem de listagem de rotas deve ser:
// Da mais genérica para a mais específica
routes.get("/livros", LivroController.listarLivros);

routes.get("/livros/busca", LivroController.listarLivroPorEditora);

routes.get("/livros/:id", LivroController.listarLivro);

routes.post("/livros", LivroController.listarLivros);

routes.put("livros/:id", LivroController.atualizarLivro);

routes.delete("livros/:id", LivroController.deletarLivro);

export default routes;
