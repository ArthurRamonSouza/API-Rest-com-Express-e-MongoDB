import mongoose from "mongoose";

const autorScheema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    email: {type: String, required: true},
}, {versionKey: false});

const autor = mongoose.model("autores", autorScheema); // autores é a coleção

export default { autor, autorScheema };