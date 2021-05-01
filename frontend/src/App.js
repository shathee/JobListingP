import {useState, useEffect} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

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
      <AppBar style={{ "background": "#0D5D56"}} position="fixed">
          <Typography varient="h1" component="h1" style={{'font-size':'1.5rem'}} >
          Github Api Job Board 
          </Typography>

      </AppBar>
      <Jobs jobs={jobs} />
    </div>
  );
}

export default App;
