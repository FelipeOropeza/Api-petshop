import cachorro from "../models/Cachorro.js";

class CachorroController {
  static async listaCachorros(req, res) {
    const listaCachorros = await cachorro.find({});
    res.status(200).json(listaCachorros);
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
    try {
      const novoCachorro = await cachorro.create(req.body);
      res.status(201).json({
        message: "Cachorro inserido com sucesso.",
        cachorro: novoCachorro,
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
        message: "Cachorro atualizado."
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
