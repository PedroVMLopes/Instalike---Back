import getAllPosts from "../models/postModel.js";

export async function listAllPosts(req, res) {
    // Chama a função para buscar os posts
    const posts = await getAllPosts();
    // Envia uma resposta HTTP com o array de posts
    res.status(200).json(posts);
}
    