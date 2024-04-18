// import http from "http";
import app from "./src/app.js";
import "dotenv/config";

// const rotas = {
//   "/": "Curso de Node.js",
//   "/cachorros": "Entrei na rota cachorros",
//   "/racas": "Entrei na rota raças"
// };

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-type": "text/plain" });
//   res.end(rotas[req.url]);
// });

app.listen(process.env.PORT, () => {
  console.log("Servidor ok");
});
