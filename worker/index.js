var CronJob = require("cron").CronJob;

const fetchGithub = require("./tasks/fetch-github");

fetchGithub();
