import express from "express";
import querystring from "querystring";
import jwt from "jsonwebtoken";
import pkg from "lodash";
const { get } = pkg;
import cookieParser from "cookie-parser";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cookieParser());

const COOKIE_NAME = "github-jwt";

app.use(
  cors({
    origin: `${process.env.GIHUB_SEARCH_APP_DOMAIN}`,
    credentials: true,
  })
);

async function getGitHubUser({ code }) {
  const githubToken = await axios
    .post(
      `https://github.com/login/oauth/access_token?client_id=${process.env.GIHUB_SEARCH_APP_USER_ID}&client_secret=${process.env.GIHUB_SEARCH_APP_CLIENT_SECRET}&code=${code}`
    )
    .then((res) => res.data)

    .catch((error) => {
      throw error;
    });

  const decoded = querystring.parse(githubToken);

  const accessToken = decoded.access_token;

  return axios
    .get("https://api.github.com/user", {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error(`Error getting user from GitHub`);
      throw error;
    });
}

app.get("/api/auth/github", async (req, res) => {
  const code = req.query.code;
  // with lodash
  // const code = get(req, "query.code");
  const path = get(req, "query.path", "/");

  if (!code) {
    throw new Error("No code!");
  }

  const gitHubUser = await getGitHubUser({ code });

  const token = jwt.sign(gitHubUser, process.env.GIHUB_SEARCH_APP_TOKEN_SECRET);

  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    domain: "localhost",
  });

  res.redirect(`http://localhost:3000${path}`);
});

app.get("/api/me", (req, res) => {
  const cookie = get(req, `cookies[${COOKIE_NAME}]`);
  try {
    const decode = jwt.verify(
      cookie,
      process.env.GIHUB_SEARCH_APP_TOKEN_SECRET
    );

    return res.send(decode);
  } catch (e) {
    return res.send(null);
  }
});

app.listen(4000, () => {
  console.log("Server is listening");
});
