import '../App.css';
import Celebration from './Celebration';
import Navbar from './Navbar';
import Speakers from './Speakers';
import Venue from './Venue';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Venue/>
      <Speakers/>
      <Celebration/>
    </div>
  );
}

export default App;
