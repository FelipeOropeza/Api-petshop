import cachorro from "../models/Cachorro.js";
import { tutor } from "../models/Tutor.js";

class CachorroController {
  static async listaCachorros(req, res) {
    const listaCachorros = await cachorro.find({});
    res.status(200).json(listaCachorros);
  }

  static async listaCachorroPorRaca(req, res) {
    const raca = req.query.raca;
    try {
      const cachorroPorRaca = await cachorro.find({ raca: raca });
      res.status(200).json(cachorroPorRaca);
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Falha ao pesquisa cachorro por raça`,
      });
    }
  }

  static async listaCachorroPorIdade(req, res) {
    const idade = req.query.idade;
    try {
      const cachorroPorIdade = await cachorro.find({ idade: idade });
      res.status(200).json(cachorroPorIdade);
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Falha ao pesquisa cachorro por idade`,
      });
    }
  }

  static async buscarCachorroPorId(req, res) {
    try {
      const id = req.params.id;
      const CachorroEncotrado = await cachorro.findById(id);
      res.status(200).json(CachorroEncotrado);
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Falha ao encontra cachorro`,
      });
    }
  }

  static async cadastrarCachorro(req, res) {
    const novoCachorro = req.body;
    try {
      const tutorEncotrado = await tutor.findById(novoCachorro.tutor);
      const cachorroCompleto = {
        ...novoCachorro,
        tutor: { ...tutorEncotrado._doc },
      };
      const cachorroCriado = await cachorro.create(cachorroCompleto);
      res.status(201).json({
        message: "Cachorro inserido com sucesso.",
        cachorro: cachorroCriado,
      });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Falha ao casdastrar cachorro`,
      });
    }
  }

  static async atualizarCachorro(req, res) {
    try {
      const id = req.params.id;
      await cachorro.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        message: "Cachorro atualizado.",
      });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Falha ao atualizar cachorro`,
      });
    }
  }

  static async deletarCachorro(req, res) {
    try {
      const id = req.params.id;
      await cachorro.findByIdAndDelete(id);
      res.status(200).send("Cachorro removido");
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Falha ao deletar cachorro`,
      });
    }
  }
}

export default CachorroController;
