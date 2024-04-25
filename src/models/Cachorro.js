import mongoose, { version } from "mongoose";
import { tutorSchema } from "./Tutor.js";

const cachorroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    raca: { type: String },
    idade: { type: Number },
    vacinado: { type: Boolean },
    tutor: tutorSchema,
  },
  { versionKey: false }
);

const cachorro = mongoose.model("cachorros", cachorroSchema);
export default cachorro;
