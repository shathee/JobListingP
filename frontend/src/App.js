
import './App.css';
import Jobs from './components/Jobs';

const mockJobs = [
  {title: 'Programmer', company: 'BWDB'},
  {title: 'Assistant Programmer', company: 'BIWTA'}
];

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
