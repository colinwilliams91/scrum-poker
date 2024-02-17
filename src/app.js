import dotenv from "dotenv";
import { Octokit, App } from "octokit";
import { createNodeMiddleware } from "@octokit/webhooks";
import { createAppAuth } from "@octokit/auth-app";
import jwt from "jsonwebtoken";
import http from "http";
import util from "util";
import fs from "fs";

dotenv.config();

/* * * * * * * *
 * ENV VARS * * *
 * * * * * * * */

const appId = process.env.APP_ID;
const webhookSecret = process.env.WEBHOOK_SECRET;
const privateKey = Buffer
  .from(process.env.PRIVATE_KEY, "base64")
  .toString("ascii");

/* LOCAL_PVT_KEY_w/_NODE_FS_*/
// const privateKeyPath = process.env.PRIVATE_KEY_PATH;
// const privateKey = fs.readFileSync(privateKeyPath, "utf-8");

const payload = {
  iat: Math.floor(Date.now() / 1000) - 60,
  exp: Date.now() + (7 * 24 * 60 * 60 * 1000),
  iss: appId
};

const jsonWebToken = jwt.sign(payload, privateKey, { algorithm: "RS256" });

/* * * * * * * *
 *_END_ENV_VARS_*
 * * * * * * * */

/* * * * * * * *
 * OCTOKIT INIT *
 * * * * * * * */

const app = new App({
  appId: appId,
  privateKey: privateKey,
  authStrategy: createAppAuth,
  auth: { appId, privateKey },
  webhooks: {
    secret: webhookSecret
  },
});

/* _OCTOKIT_FROM_SDK_METHOD_FOR_INSTALLATION_ID_*/
// const octokit = await app.getInstallationOctokit("Iv1.e264e30f233d7489");

/* _APP_OCTOKIT_AUTH_INIT_NO_JWT_ */
// const appOctokit = new Octokit({
//   authStrategy: createAppAuth,
//   auth: { appId, privateKey }
// });

/* * * * * * * *
 *_END_APP_INIT_*
 * * * * * * * */

/* * * * * * * *
 * MIDDLEWARE * *
 * * * * * * * */

/* _WEBHOOKS_ */
app.webhooks.onAny(({ id, name, payload }) => {
  console.log(name, "event received");
});

app.webhooks.onError((error) => {
  if (error.name === "AggregateError") {
    console.error(`Error processing request: ${error.event}`);
  } else {
    console.error(error);
  }
});

/* _REST_ */
// TODO: GET Installation ID
// const I_ID = await app.octokit.request("GET /app/installations");
// console.log(I_ID);

// TODO: JWT for GH/Octokit
// const { data } = await app.octokit.request("GET /app", {
//   headers: {
//     "authorization": `Bearer ${jsonWebToken}`,
//     "x-github-api-version": "2022-11-28"
//   },
// });

// console.log("unformatted:", data);
// console.log(JSON.stringify(data, null, 2));
// console.log(util.inspect(data, { depth: null }));

// TODO: Add a repo to the application watched repositories to GET backlog

// app.oauth.on("token", async ({ token, octokit }) => {
//   // TODO: this octokit.authenticate should be in the parent scope so it is more available
//   octokit.authenticate({ type: 'token', token: installation.data.token })
//   const { data } = await octokit.request("GET /user");
//   console.log(`Token retrieved for ${data.login}`);
// });

// TODO: test GET backlog from specific repository
// await octokit.request("GET /repos/{owner}/{repo}/issues", {
//   owner: "github",
//   repo: "docs",
//   per_page: 2
// });

// TODO: this is an ex Octokit App constructor passing OAuth
// const app = new App({
//   appId: 123,
//   privateKey: "-----BEGIN PRIVATE KEY-----\n...",
//   oauth: {
//     clientId: "0123",
//     clientSecret: "0123secret",
//   },
//   webhooks: {
//     secret: "secret",
//   },
// });

/* * * * * * * * *
 *_END_MIDDLEWARE_*
 * * * * * * * * */


/* * * * * * * *
 * SERVER INIT * *
 * * * * * * * */

/* SERVER_VARS */
const port = process.env.PORT;
const host = process.env.NODE_ENV === "production" ? "0.0.0.0" : "localhost";
const path = process.env.WEBHOOK_PATH;

/* CONDENSE_ALL_SERVER_OCTOKIT_INSTANCE_MIDDLEWARE */
const middleware = createNodeMiddleware(app.webhooks, { path });

http
  .createServer(middleware)
  .listen(port, () => {
    console.log(`Server is listening for events at: ${host}:${port}`);
    console.log("Press Ctrl + C to quit.");
  });