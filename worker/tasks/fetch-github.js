

const fetch = require('node-fetch');

const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");
// const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);


const baseURL = 'https://jobs.github.com/positions.json';

let jobCount = 1, onPage = 0;
const allJobs = [];

async function fetchGithub() {
    while(jobCount >0 ) {
        const res = await fetch(`${baseURL}?page=${onPage}`);
        const jobs = await res.json();
        allJobs.push(...jobs);
        jobCount = jobs.length;
        console.log('got', jobCount, 'in page', onPage);
        onPage++;
    }

    console.log('Total ', allJobs.length, 'Jobs');
    const success = setAsync('github', JSON.stringify(allJobs));

    console.log({success});
}

// fetchGithub();

module.exports = fetchGithub;