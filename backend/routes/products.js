import { Router } from "express";
import productModel from "../models/product.model.js";

const productsRouter = Router();

productsRouter.get('/', (req, res) => {
    res.json({mssg: "Product found"});
});

productsRouter.post('/', async (req, res) => {
    try {
        const { image, category, description, price, quantity } = req.body;
        const product = await productModel.create({ image, category, description, price, quantity });
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

productsRouter.put('/:id', (req, res) => {
    res.json({mssg: "Product Updated"});
});

productsRouter.delete('/:id', (req, res) => {
    res.json({mssg: "Product Deleted"});
});

export default productsRouter;
