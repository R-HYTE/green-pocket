import { Router } from "express";
import { deleteProduct, getProduct, getProducts, patchProduct, postProduct } from "../controllers/products.js";

const productsRouter = Router();

productsRouter.get('/', getProducts);
productsRouter.get('/:id', getProduct);
productsRouter.post('/', postProduct);
productsRouter.patch('/:id', patchProduct);
productsRouter.delete('/:id', deleteProduct);

export default productsRouter;
