import express from 'express';
import { listAllPosts } from '../controllers/postsController.js';

const routes = (app) => {
    // Permite que o servidor interprete requisições com o corpo em formato JSON
    app.use(express.json());

    // Rota para buscar todos os posts
    app.get("/posts", listAllPosts);
}

export default routes;