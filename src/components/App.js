import '../App.css';
import Celebration from './Celebration';
import Footer from './Footer';
import Navbar from './Navbar';
import Speakers from './Speakers';
import Sponsors from './Sponsors';
import Venue from './Venue';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Venue/>
      <Speakers/>
      <Celebration/>
      <Sponsors/>
      <Footer/>
    </div>
  );
}

export default App;
