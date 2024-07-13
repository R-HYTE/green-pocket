import { Schema, model } from "mongoose";

const productSchema = Schema(
    {
        image_url: { type: String },
        category: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true }
    },
    { timestamps: true }
);

export default model('products', productSchema);
