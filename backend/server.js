import { config } from 'dotenv';
import express from 'express';
import productsRouter from './routes/products.js';
import feedbacksRouter from './routes/feedbacks.js';
import mongoose from 'mongoose';

config();
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/products', productsRouter);
app.use('/api/feedbacks', feedbacksRouter);

// Database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to database');
        const port = process.env.PORT;
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
