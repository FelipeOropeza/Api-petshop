import mongoose from "mongoose";

async function conectarDataBase() {
  mongoose.connect(
    "mongodb+srv://felipe2006co:d940vKrcHswjxHjx@cluster0.v2upcxc.mongodb.net/senacPetShop?retryWrites=true&w=majority&appName=Cluster0"
  );

  return mongoose.connection;
}

export default conectarDataBase;
