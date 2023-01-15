import '../styles/App.css';
import Nav from './nav';
import Hero from './hero';
import About from './about';
import Projects from './projects';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
