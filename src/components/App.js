import '../App.css';
import Navbar from './Navbar';
import Speakers from './Speakers';
import Venue from './Venue';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Venue/>
      <Speakers/>
    </div>
  );
}

export default App;
