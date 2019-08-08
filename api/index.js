const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;

app.use(cors());

const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

app.get("/jobs", async (req, res) => {
  const jobs = await getAsync("github");
  res.header("Access-Control-Allow-Headers", "http://localhost:3000");
  return res.send(jobs);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`app running on port ${port}`));
