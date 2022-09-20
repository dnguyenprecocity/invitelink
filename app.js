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
          "14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5",
        ],
      },
    },
  ]);
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
