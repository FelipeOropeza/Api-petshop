import express from "express";
import CachorroController from "../controllers/cachorroController.js";

const routes = express.Router();

routes.get("/cachorros", CachorroController.listaCachorros);
routes.get("/cachorros/:id", CachorroController.buscarCachorroPorId);
routes.post("/cachorros", CachorroController.cadastrarCachorro);
routes.put("/cachorros/:id", CachorroController.atualizarCachorro);
routes.delete("/cachorros/:id", CachorroController.deletarCachorro);

export default routes;