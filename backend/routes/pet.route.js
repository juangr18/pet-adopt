import express from "express";

import {
  registerPet,
  getPets,
  adoption,
} from "../controllers/pet.controller.js";

const router = express.Router();

router.post("/registerPet", registerPet);
router.post("/adoption", adoption);
router.get("/getPets", getPets);
export default router;
