import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
import querystring from "querystring";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/getAccessToken", async (req, res) => {
  const code = req.query.code;
  console.log("code>>", code);

  const githubToken = await axios
    .post(
      `https://github.com/login/oauth/access_token?client_id=${process.env.GIHUB_SEARCH_APP_USER_ID}&client_secret=${process.env.GIHUB_SEARCH_APP_CLIENT_SECRET}&code=${code}`
    )
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });

  const decoded = querystring.parse(githubToken);

  const accessToken = decoded.access_token; // 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
  console.log("accessToken>>", accessToken);

  return axios
    .get("https://api.github.com/user", {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((res) => {
      console.log("res.data>>", res.data.login);
      return res.data;
    })
    .catch((error) => {
      console.error(`Error getting user from GitHub`);
      throw error;
    });
});

app.listen(4000, () => {
  console.log("Server is running...");
});
