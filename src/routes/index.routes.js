import { Router } from "express";
import {
        renderIndex,
        addProduct,
        renderEdit,
        editProduct,
        deleteProduct,
        allProducts,
        renderAeromax
    } from "../controllers/products.controllers";

const router = Router();

router.get("/", renderIndex);

router.get("/aeromax-server", renderAeromax)

router.post("/products/add", addProduct);

router.get("/edit/:id", renderEdit);

router.post("/edit/:id", editProduct);

router.get("/delete/:id",deleteProduct);

router.get("/all-products", allProducts);

export default router;