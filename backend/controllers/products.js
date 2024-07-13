import ProductModel from "../models/product.model.js";

// GET all products
export const getProducts = async (req, res) => {
    try {
        const products = await ProductModel.find({}).sort({ createdAt: -1 });
        if (!products.length) return res.status(404).json({ error: "No products found" });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific product
export const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ProductModel.findById(id);
        if (!product) return res.status(404).json({ error: "Product with the given ID not found" });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST a specific product
export const postProduct = async (req, res) => {
    try {
        const { image_url, category, description, price, quantity } = req.body;
        if (!category || !description || !price || !quantity) return res.status(400).json({ error: "Category, description, price and quantity are required" });
        const product = await ProductModel.create({ image_url, category, description, price, quantity });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE a specific product
export const patchProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ error: "Product with the given ID not found" });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE a specific product
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await ProductModel.findByIdAndDelete(id);
        if (!deletedProduct) return res.status(404).json({ error: "Product with the given ID not found" });
        res.status(200).json(deletedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
