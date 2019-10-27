const fetch = require("node-fetch");
const redis = require("redis");

const REDIS_URL =
  "redis://h:p251ce1969fe0956308626b62bea4f3a9aa59df59b7a76a90945bddee05c666bf@ec2-34-194-128-174.compute-1.amazonaws.com:31709";

const client = redis.createClient(process.env.REDIS_URL);

const { promisify } = require("util");
//const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const baseUrl = "https://jobs.github.com/positions.json";

async function fetchGithub() {
  let resultCount = 1,
    onPage = 0;
  const allJobs = [];

  // fetch all pages
  while (resultCount > 0) {
    const res = await fetch(`${baseUrl}?page=${onPage}`);
    const jobs = await res.json();
    allJobs.push(...jobs);
    resultCount = jobs.length;
    console.log("got", jobs.length);
    onPage++;
  }

  console.log("total", allJobs.length);

  // filter algo
  const jrJobs = allJobs.filter(job => {
    let jobTitle = job.title.toLowerCase();

    // algo logic
    if (
      jobTitle.includes("senior") ||
      jobTitle.includes("manager") ||
      jobTitle.includes("sr") ||
      jobTitle.includes("architect") ||
      jobTitle.includes("deutschland") ||
      jobTitle.includes("data scientist") ||
      jobTitle.includes("c++")
    ) {
      return false;
    }
    return true;
  });

  console.log("filtered", jrJobs.length);

  // set in redis
  const success = await setAsync("github", JSON.stringify(jrJobs));

  console.log({ success });
}

module.exports = fetchGithub;
