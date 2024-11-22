import conectarAoBanco from "../config/dbConfig.js";

const conection = await conectarAoBanco(process.env.STRING_CONEXAO);

export default async function getAllPosts() {
    const db = conection.db("imersao-backend");
    const collection = db.collection("posts");
    return collection.find().toArray();
}

