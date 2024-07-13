import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.json({mssg: "Product found"});
});

router.post('/', (req, res) => {
    res.json({mssg: "Product Saved"});
});

router.put('/:id', (req, res) => {
    res.json({mssg: "Product Updated"});
});

router.delete('/:id', (req, res) => {
    res.json({mssg: "Product Deleted"});
});

export default router;
