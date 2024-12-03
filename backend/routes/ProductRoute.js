import express from "express";
import {
    GetProducts,
    GetProductById,
    CreateProduct,
    UpdateProduct,
    DeleteProduct,
} from "../controllers/Products.js";

const router = express.Router();

router.get('/products', GetProducts);
router.get('/products/:id', GetProductById);
router.post('/products', CreateProduct);
router.patch('/products/:id', UpdateProduct);
router.delete('/products/:id', DeleteProduct);

export default router;