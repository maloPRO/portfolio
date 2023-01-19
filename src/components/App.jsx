import React from 'react';
import { useEffect } from 'react';
import '../styles/App.css';
import Nav from './nav';
import Hero from './hero';
import About from './about';
import Projects from './projects';
import Contacts from './contacts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  FullPage, { FullPageSections, fullPageSection, fullPageNavigation } from '@ap.cx/react-fullpage';

function App() {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <FullPage className="App">
      <FullPageSections>
        <Nav/>
        <Hero/>
        <About/>
        <Projects/>
        <Contacts/>
      </FullPageSections>
    </FullPage>
  );
}

export default App;
