import mongoose from "mongoose";
import { autorScheema } from "../models/Autor.js";

const livroScheema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        titulo: { type: String, required: true },
        editora: { type: String, required: true },
        preco: { type: Number, requied: true },
        paginas: { type: Number, required: true },
        autor: autorScheema,
    },
    { versionKey: false },
);

const livro = mongoose.model("livros", livroScheema); // livros é a coleção

export default livro;
