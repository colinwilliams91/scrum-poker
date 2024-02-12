import dotenv from "dotenv";
import { App, createNodeMiddleware  } from "octokit";
import http from "http";

dotenv.config();

const appId = process.env.APP_ID;
const webhookSecret = process.env.WEBHOOK_SECRET;
const privateKey = Buffer
  .from(process.env.PRIVATE_KEY, "base64")
  .toString("ascii");

/* Octokit App Class */
const app = new App({
  appId: appId,
  privateKey: privateKey,
  webhooks: {
    secret: webhookSecret
  },
});

// TODO: Add a repo to the application watched repositories to GET backlog

// app.oauth.on("token", async ({ token, octokit }) => {
//   const { data } = await octokit.request("GET /user");
//   console.log(`Token retrieved for ${data.login}`);
// });