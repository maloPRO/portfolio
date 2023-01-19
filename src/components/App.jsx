import '../styles/App.css';
import Nav from './nav';
import Hero from './hero';
import About from './about';
import Projects from './projects';
import Contacts from './contacts';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <About/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
