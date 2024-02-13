import dotenv from "dotenv";
import { App, createNodeMiddleware  } from "octokit";
import http from "http";
import util from "util";

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

// TODO: JWT for GH/Octokit
const { data } = await app.octokit.request("GET /app");

console.log("unformatted:", data);
console.log(JSON.stringify(data, null, 2));
console.log(util.inspect(data, { depth: null }));

app.webhooks.onAny(({ id, name, payload }) => {
  console.log(name, "event received");
});

// TODO: Add a repo to the application watched repositories to GET backlog

app.oauth.on("token", async ({ token, octokit }) => {
  // TODO: this octokit.authenticate should be in the parent scope so it is more available
  octokit.authenticate({ type: 'token', token: installation.data.token })
  const { data } = await octokit.request("GET /user");
  console.log(`Token retrieved for ${data.login}`);
});

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


/* Server Setup */
const port = process.env.PORT;
const host = process.env.NODE_ENV === "production" ? "0.0.0.0" : "localhost";
const path = process.env.WEBHOOK_PATH;

/* Condense All Server Octokit Instance Middleware */
const middleware = createNodeMiddleware(app);

http
  .createServer(middleware)
  .listen(port, () => {
    console.log(`Server is listening for events at: ${host}:${port}`);
    console.log("Press Ctrl + C to quit.");
  });