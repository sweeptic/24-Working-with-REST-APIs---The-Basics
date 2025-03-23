import express from 'express';
import feedRoutes from './routes/feed.js';
const app = express();

// GET /feed/posts
app.use('/feed', feedRoutes);

app.listen(8080);
