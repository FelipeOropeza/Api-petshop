import express from "express";
import CachorroController from "../controllers/cachorroController.js";

const routes = express.Router();

routes.get("/cachorros", CachorroController.listaCachorros);
routes.post("/cachorros", CachorroController.cadastrarCachorro);

export default routes;