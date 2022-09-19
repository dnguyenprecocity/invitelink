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

// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
