import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

import querystring from "querystring";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Backend is working...");
});

async function getGithubUser(getLoginCode) {
  const params = `https://github.com/login/oauth/access_token?client_id=${process.env.GIHUB_SEARCH_APP_USER_ID}&client_secret=${process.env.GIHUB_SEARCH_APP_CLIENT_SECRET}&code=${getLoginCode}`;

  const githubToken = await axios
    .post(params)
    .then((res) => {
      return res.data;
      /* 
    console.log("res.data>>", res.data);
      access_token=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&scope=user%3Aemail&token_type=bearer
  */
    })
    .catch((err) => {
      console.log(err);
    });

  /* 
    select token manually
      const accessParts = githubToken.split("access_token=")[1].split("&")[0]; // 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

    or with querystring package from Node.js

    const decoded = querystring.parse(githubToken);
      
      decoded>> [Object: null prototype] {
        access_token: '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',
        scope: 'user:email',
        token_type: 'bearer'
      }
      console.log("decoded>>", decoded.access_token);
  */

  const decoded = querystring.parse(githubToken);

  const accessToken = decoded.access_token;

  return axios
    .get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error getting user from GitHub");
      throw error;
    });
}

app.get("/api/auth/github", async (req, res) => {
  const getLoginCode = req.query.code;
  const getLoginPath = req.query.path;
  if (!getLoginCode) {
    throw new Error("No code!");
  }

  const gitHubUser = await getGithubUser(getLoginCode);
  /* 
  console.log("gitHubUser>>", gitHubUser); // Hooray!!! user info

  for typescript purposes:
  → app.quicktype.io/?l=ts → get obj type
  */
  console.log(JSON.stringify(gitHubUser)); // copy it!

  res.redirect(`http://localhost:3000${getLoginPath}`);
});

// http://localhost:4000/api/auth/github?path=/&code=6bd75a8146bb0ebeb65e

app.listen(4000, () => {
  console.log("Server is listening...");
});
