const express = require("express");
const app = express();

// use the express-static middleware
// app.use(express.static("public"));

// define the first route
app.get("/", (_, res) => {
  res.send("HELLO WORLD");
});

app.get("/.well-known/apple-app-site-association", (_, res) => {
  res.json({
    applinks: {
      apps: [],
      details: [
        {
          appID: "Y5J4757RA3.org.reactjs.native.example.Knightvest-POC",
          paths: ["*"],
        },
      ],
    },
  });
});

app.get("/.well-known/assetslinks.json", (_, res) => {
  res.json([
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "com.knightvest_poc",
        sha256_cert_fingerprints: ["sdf"],
      },
    },
  ]);
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
