import express from 'express'

import {registerOwner} from "../controllers/owner.controller.js";

const router = express.Router();

router.post("/registerOwner", registerOwner);
export default router;
