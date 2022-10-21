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
          appID: "89P5VX46N4.com.apthub.precocity",
          paths: ["*"],
        },
      ],
    },
  });
});

app.get("/.well-known/apple-app-site-association", (_, res) => {
  res.json({
    applinks: {
      apps: [],
      details: [
        {
          appID: "89P5VX46N4.com.apthub.precocity",
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
        package_name: "com.apthub",
        sha256_cert_fingerprints: [
          "0D:A9:D8:55:E7:88:8F:B4:CE:99:C4:71:37:27:46:1E:8B:08:3D:B4:4A:0A:C9:46:97:D2:39:E0:86:25:62:08",
        ],
      },
    },
  ]);
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
