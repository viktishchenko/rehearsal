import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.listen(4000, () => {
  console.log("halo from back");
});
