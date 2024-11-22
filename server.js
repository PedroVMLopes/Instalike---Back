import express from 'express';
import conectarAoBanco from './src/config/dbConfig.js';

const conection = await conectarAoBanco(process.env.STRING_CONEXAO);

const posts = [
    {   
        id: 1,
        descricao: "Foto teste 1",
        imagem: "https://placecats.com/millie/200/200"
    },
    {
        id: 2,
        descricao: "Gato brincando com bola de lã",
        imagem: "https://placecats.com/felix/300/300"
    },
    {
        id: 3,
        descricao: "Gatinho dormindo em uma caixa",
        imagem: "https://placecats.com/whiskers/250/250"
    },
    {
        id: 4,
        descricao: "Dois gatos se olhando",
        imagem: "https://placecats.com/oreo/400/300"
    },
    {
        id: 5,
        descricao: "Gato olhando pela janela",
        imagem: "https://placecats.com/ginger/350/250"
    },
    {
        id: 6,
        descricao: "Gato comendo ração",
        imagem: "https://placecats.com/marmalade/200/200"
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {console.log('Server is running on port 3000')});

async function getAllPosts() {
    const db = conection.db("imersao-backend");
    const collection = db.collection("posts");
    return collection.find().toArray();
}

app.get("/posts", async (req, res)=> {
    const posts = await getAllPosts();
    res.status(200).json(posts);
});