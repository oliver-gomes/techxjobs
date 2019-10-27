const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;

app.use(cors());

const redis = require("redis");
const REDIS_URL =
  "redis://h:p251ce1969fe0956308626b62bea4f3a9aa59df59b7a76a90945bddee05c666bf@ec2-34-194-128-174.compute-1.amazonaws.com:31709";

const client = redis.createClient(process.env.REDIS_URL);

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
