import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";

import ownerRoutes from "./routes/owner.route.js"
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/owner/", ownerRoutes);

app.listen(process.env.PORT, () => {
  db.dbConnection;
  console.log("Server running on PORT", process.env.PORT);
});


