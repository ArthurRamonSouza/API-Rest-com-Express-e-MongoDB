import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {
    // Usamos async para que a função seja assíncrona devido a necessidade de se conectar com o banco de dados
    static async listarLivros(req, res) {
        try {
            const livros = await livro.find({});
            res.status(200).json(livros);
        } catch (error) {
            res.status(400).json({
                message: `${error.message} - Falha ao listar os livros`,
            });
        }
    }

    static async cadastrarLivro(req, res) {
        const data = req.body;
        try {
            const autor = await autor.findById(data.autor);
            const livroCadastrado = await livro.create({
                ...data,
                autor: { ...autor._doc },
            });
            res.status(201).json({
                message: "Livro cadastrado!",
                livro: livroCadastrado,
            });
        } catch (error) {
            res.status(400).json({
                message: `${error.message} - Falha no cadastro do livro`,
            });
        }
    }

    static async listarLivro(req, res) {
        try {
            const id = req.params.id;
            const livro = await livro.findById(id);
            res.status(200).json({
                message: "Livro encontrado!",
                livro: livroCadastrado,
            });
        } catch (error) {
            res.status(400).json({
                message: `${error.message} - Falha na busca do livro`,
            });
        }
    }

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            const livroAtualizado = await livro.findByIdAndUpdate(
                id,
                req.body,
                { new: true },
            );
            res.status(200).json({
                message: "Livro atualizado!",
                livro: livroAtualizado,
            });
        } catch (error) {
            res.status(400).json({
                message: `${error.message} - Falha na atualização do livro`,
            });
        }
    }

    static async deletarLivro(req, res) {
        try {
            const id = req.params.id;
            const livroDeletado = await livro.findByIdAndDelete(id);
            res.status(200).json({
                message: "Livro deletado!",
                livro: livroDeletado,
            });
        } catch (error) {
            res.status(400).json({
                message: `${error.message} - Falha na deleção do livro`,
            });
        }
    }

    static async listarLivroPorEditora(req, res) {
        const editora = req.query.editora; // editora é a variável utilizada na query para receber o parâmetro editora
        // https://livraria/livros/busca?editora=Editora

        try {
            const livro = await livro.find({ editora }); // JS simplifica quando {chave : valor} possuem o mesmo nome
            res.status(200).json({
                message: "Livro encontrado!",
                livro: livro,
            });
        } catch (error) {
            res.status(400).json({
                message: `${error.message} - Falha na deleção do livro`,
            });
        }
    }
}

export default LivroController;
