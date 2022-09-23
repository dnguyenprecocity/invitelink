const express = require("express");
const app = express();

// use the express-static middleware
// app.use(express.static("public"));

// define the first route
app.get("/", (_, res) => {
  res.send("Hello World");
});

app.get("/.well-known/apple-app-site-association", (_, res) => {
  res.json({
    applinks: {
      apps: [],
      details: [
        {
          appID: "89P5VX46N4.com.apthub",
          paths: ["*"],
        },
      ],
    },
  });
});

app.get("/.well-known/assetlinks.json", (_, res) => {
  res.send([
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "com.knightvest_poc",
        sha256_cert_fingerprints: [
          "FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C",
        ],
      },
    },
  ]);
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
