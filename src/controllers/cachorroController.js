import cachorro from "./models/Cachorro.js";

class CachorroController {
  static async listaCachorros(req, res) {
    const listaCachorros = await cachorro.find({});
    res.status(200).json(listaCachorros);
  }
}

export default CachorroController;
