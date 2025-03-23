import { Router } from 'express';
import { getPosts } from '../controllers/feed.js';

const feedRoutes = Router();

feedRoutes.get('/posts', getPosts);

export default feedRoutes;
