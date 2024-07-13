import { config } from 'dotenv';
import express from 'express';
import router from './routes/products.js';
import mongoose, { mongo } from 'mongoose';

config();
const app = express();

app.use((req, res, next) => {
    console.log(req.path);
    next();
});

app.use('/api/products', router);

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
