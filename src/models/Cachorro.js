import mongoose, { version } from "mongoose";

const cachorroSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId},
    nome: { type: String, required: true },
    raca: { type: String },
    idade: { type: Number },
    vacinado: { type: Boolean },
  },
  { versionKey: false }
);

const cachorro = mongoose.model("cachorros", cachorroSchema);
export default cachorro;