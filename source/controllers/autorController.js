import { autor } from "../models/Autor.js";

class AutorController {
    // Usamos async para que a função seja assíncrona devido a necessidade de se conectar com o banco de dados
    static async listarAutores(req, res) {
        try {
            const autores = await autor.find({});
            res.status(200).json(autores);
        } catch(error){
            res.status(400).json({message: `${error.message} - Falha ao listar os autores`});
        }
    }

    static async cadastrarAutor(req, res) {
        try {
            const autorCadastrado = await autor.create(req.body);
            res.status(201).json({message: "Autor cadastrado!", autor: autorCadastrado});
        } catch(error) {
            res.status(400).json({message: `${error.message} - Falha no cadastro do autor`});
        }
    }
    
    static async listarAutor(req, res) {
        try {
            const id = req.params.id;
            const autor = await autor.findById(id);
            res.status(200).json({message: "Autor encontrado!", autor: autorCadastrado});
        } catch (error) {
            res.status(400).json({message: `${error.message} - Falha na busca do autor`});
        };
    }

    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            const autorAtualizado = await autor.findByIdAndUpdate(id, req.body, {new: true});
            res.status(200).json({message: "Autor atualizado!", autor: autorAtualizado});
        } catch(error) {
            res.status(400).json({message: `${error.message} - Falha na atualização do autor`});
        }
    }

    static async deletarAutor(req, res) {
        try {
            const id = req.params.id;
            const autorDeletado = await autor.findByIdAndDelete(id);
            res.status(200).json({message: "Autor deletado!", autor: autorDeletado});
        } catch(error) {
            res.status(400).json({message: `${error.message} - Falha na deleção do autor`});
        }   
    }
};

export default AutorController;