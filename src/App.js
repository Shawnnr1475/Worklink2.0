import './App.css';
import Map from "./Map/Map"

function App() {
  const jobTitles = ["Painter","Tie Installer","Brick Layer", "Plumber"]
  return (
    <div className="App">
      <Map jobTitles={jobTitles}/>
    </div>
  );
}

export default App;
