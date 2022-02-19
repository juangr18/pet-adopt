import express from "express";
import typePetController from "../controllers/typePetController.js";

const router = express.Router();

router.post("/registerTypePet", typePetController.registerTypePet)

export default router;