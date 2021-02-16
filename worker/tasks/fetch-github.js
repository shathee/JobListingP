var fetch = require('node-fetch');


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
}

fetchGithub();

module.exports = fetchGithub;