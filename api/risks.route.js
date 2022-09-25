import express from "express";
import ProductsController from "./risks.controller.js"

const router = express.Router();

router.route("/").get(ProductsController.apiGetRiskCheck);
export default router;