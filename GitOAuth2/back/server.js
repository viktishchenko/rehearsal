const express = require("express");
const cors = require("cors");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const bodyParser = require("body-parser");
require("dotenv").config();

const id = process.env.GIHUB_SEARCH_APP_USER_ID;
const secret = process.env.GIHUB_SEARCH_APP_CLIENT_SECRET;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/getAccessToken", async function (req, res) {
  const code = req.query.code;

  const params = `?client_id=${id}&client_secret=${secret}&code=${code}`;
  console.log("params>>", params);

  await fetch(`https://github.com/login/oauth/access_token${params}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("dataPost>>", data);
      res.json(data);
    });
});

app.get("/getUserData", async function (req, res) {
  req.get("Authorization"); // Bearer AccessToken

  await fetch("https://api.github.com/user", {
    method: "GET",
    headers: {
      Authorization: req.get("Authorization"), // // Bearer AccessToken
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("dataGet>>", data);
      res.json(data);
    });
});

app.listen(4000, () => {
  console.log("CORS server running...");
});
