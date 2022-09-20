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
          appID: "Y5J4757RA3.org.reactjs.native.example.Knightvest-POCaaa",
          paths: ["*"],
        },
      ],
    },
  });
});

app.get("/.well-known/assetslinks.json", (_, res) => {
  res.send([
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "com.knightvest_poc",
        sha256_cert_fingerprints: [
          "EF:64:79:D0:90:6D:50:EA:45:A9:01:89:0B:63:D2:A0:A1:19:90:31:50:2E:6D:3D:AC:41:8C:51:7C:3D:ED:28",
        ],
      },
    },
  ]);
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
