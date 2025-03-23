import express from 'express';
import feedRoutes from './routes/feed.js';
import bodyParser from 'body-parser';

const app = express();

// app.use(bodyParser.urlencoded()) // x-www-form-urlencoded <form>

app.use(bodyParser.json()); // application/json

// GET /feed/posts
app.use('/feed', feedRoutes);

app.listen(8080);
