const express = require("express");
const app = express();
const port = 3001;

const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

app.get("/", async (req, res) => {
  const jobs = await getAsync("github");

  return res.send(jobs);
});

app.listen(port, () => console.log(`app running on port ${port}`));
