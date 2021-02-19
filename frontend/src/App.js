import {useState, useEffect} from 'react';

import './App.css';
import Jobs from './components/Jobs';

const API_BASE_URL = 'http://localhost:3001/jobs'; 



async function getAllJobs(setJobsCb) {
  const res = await fetch(API_BASE_URL); 
  const jrJobs = await res.json();

  setJobsCb(jrJobs);
}

function App() {

  const [jobs, setjobs] = useState([])

  useEffect(() => {
    getAllJobs(setjobs);
  }, [])


  return (
    <div className="App">
      <Jobs jobs={jobs} />
    </div>
  );
}

export default App;
