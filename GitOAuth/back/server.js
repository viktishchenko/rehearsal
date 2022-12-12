import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Backend is working...");
});

app.get("/api/auth/github", async (req, res) => {
  const getLoginCode = req.query.code;
  const getLoginPath = req.query.path;
  if (!getLoginCode) {
    throw new Error("No code!");
  }
});

// http://localhost:4000/api/auth/github?path=/&code=6bd75a8146bb0ebeb65e

app.listen(4000, () => {
  console.log("Server is listening...");
});
