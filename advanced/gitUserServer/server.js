import express from "express";
import cors from "cors";
import fetch from "node-fetch";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// pass from the front
app.get("/getAccessToken", async (req, res) => {
  const getLoginCode = req.query.code;
  console.log("getLoginCode>>", getLoginCode);
  const params = `?client_id=${process.env.GIHUB_SEARCH_USER_ID}&client_secret=${process.env.GIHUB_SEARCH_CLIENT_SECRET}&code=${getLoginCode}`;
  await fetch(`https://github.com/login/oauth/access_token${params}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("dataToken>>", data);
      res.json(data);
    });
});

// getUserData
// access token from Authorization header
app.get("/getUserData", async (req, res) => {
  req.get("Authorization"); //Bearer AccessToken
  await fetch("https://api.github.com/user", {
    method: "GET",
    headers: {
      Authorization: req.get("Authorization"), //Bearer AccessToken
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("dataUser>>", data);
      res.json(data);
    });
});

app.listen(4000, () => {
  console.log("halo from back");
});
