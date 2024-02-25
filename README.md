# scrum-poker
- This is an application that integrates with GitHub Projects for seamless import of product backlogs into a UI for easy sprint estimation.
- Scrum-Poker will **watch** select repos after the app is installed to a user's GitHub (user acct, org acct, or repo)
- To test this, Scrum Poker is currently installed on this [scrum-poker-test repository](https://github.com/colinwilliams91/scrum-poker-test)
  - Please clone down that repo and use it for [testing](...)

## Op-Specs

### To Start:


### To Test:
- Inside your IDE (scrum-poker project)
- Spin up Proxy Webhook Watch Server
```sh
npx smee -u https://smee.io/hcbsiedRHAM0Aka3 -t http://localhost:3000/api/webhook
```
- Spin up Scrum Poker server locally
```sh
npm run server
```
- Make changes for Event you want to test to [this scrum-poker-test repository](https://github.com/colinwilliams91/scrum-poker-test)
  - This will most likely be a change in this repository's GH GUI (issue comment, PR request, etc.)
  - Scrum Poker is installed to and watching that repository
- Navigate to [https://smee.io/hcbsiedRHAM0Aka3](https://smee.io/hcbsiedRHAM0Aka3) in your web browser
- You should now see the JSON Payload for the event you are testing with all information from GH Rest API



## Notes:

### GitHub Application Settings
- User Access Token
  - [Refreshing a user access token](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/refreshing-user-access-tokens#refreshing-a-user-access-token-with-a-refresh-token)
  - _pretty simple, just make a POST request to a URL and handle respone_

### GitHub App Auth
- [Example](https://github.com/octokit/octokit.js?tab=readme-ov-file#authentication)

### Headers for Requests to GH API
- `X-Accepted-GitHub-Permissions` you can use this header to identify the permissions required to access the REST API endpoint. (ex below)
  - [Docs](https://docs.github.com/en/rest/using-the-rest-api/troubleshooting-the-rest-api?apiVersion=2022-11-28#resource-not-accessible)
- `User-Agent` errors mean your username or the name of your application need to be applied as the `User-Agent` header value
  - [Docs](https://docs.github.com/en/rest/using-the-rest-api/troubleshooting-the-rest-api?apiVersion=2022-11-28#user-agent-required)
- Validation Failed error: response body will include a `code` which correlate to the table in below documentation:
  - [Docs](https://docs.github.com/en/rest/using-the-rest-api/troubleshooting-the-rest-api?apiVersion=2022-11-28#validation-failed)

### TypeScript
- Using module `"Module": "NodeNext"` requires `.js` file extension for imports local to project.
- This is _not_ the case when importing from `node_modules`:
```
import { hey } from "./helper.js"

import { read } from "fs";
```

### Deploying
- [Update the webhook URL](https://docs.github.com/en/apps/creating-github-apps/writing-code-for-a-github-app/building-a-github-app-that-responds-to-webhook-events#update-the-webhook-url)
  - Once you have a server that is set up to receive webhook traffic from GitHub, update the webhook URL in your app settings. You should not use Smee.io to forward your webhooks in production.
  - [Share on marketplace](https://docs.github.com/en/apps/creating-github-apps/writing-code-for-a-github-app/building-a-github-app-that-responds-to-webhook-events#share-your-app)

### Draw.io
- [GH/App communication and User Input](https://app.diagrams.net/?libs=general;flowchart#Hcolinwilliams91%2Fscrum-poker%2Fmain%2Fgh-integrations-chart.drawio.html)