import { request } from "express";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const cachorroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    raca: { type: String },
    idade: { type: Number },
    vacinafo: { type: Boolean },
  },
  { versionKey: false }
);

const cachorro = mongoose.model("cachorros", cachorroSchema)