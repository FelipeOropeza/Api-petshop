import express from "express";
import conectarDataBase from "./config/dbConnect.js";

const conexao = await conectarDataBase();

conexao.on("erro", (erro) => {
  console.log("Erro de conexão.", erro);
});

conexao.once("open", () => {
  console.log("Conexão feita com sucesso.");
});

const app = express();
app.use(express.json());

const cachorros = [
  {
    id: 1,
    raca: "Poodle",
  },
  {
    id: 2,
    raca: "Labrador",
  },
];

function buscarCachorro(id) {
  return cachorros.findIndex((cachorro) => {
    return cachorro.id === Number(id);
  });
}

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/cachorros", (req, res) => {
  res.status(200).json(cachorros);
});

app.get("/cachorros/:id", (req, res) => {
  const index = buscarCachorro(req.params.id);
  res.status(200).json(cachorros[index]);
});

app.post("/cachorros", (req, res) => {
  cachorros.push(req.body);
  res.status(201).send("Cachorro inserido com sucesso.");
});

app.put("/cachorros/:id", (req, res) => {
  const index = buscarCachorro(req.params.id);
  cachorros[index].raca = req.body.raca;
  res.status(200).json(cachorros);
});

app.delete("/cachorros/:id", (req, res) => {
  const index = buscarCachorro(req.params.id);
  cachorros.splice(index, 1);
  res.status(200).send("Cachorro removido");
});

export default app;
