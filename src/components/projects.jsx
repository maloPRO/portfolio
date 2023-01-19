import React from 'react';
import { useState } from 'react';
import '../styles/projects.css';
import myBraryIcon from '../images/myBrary.png';
import cvIcon from '../images/cv.png';
import myWeatherIcon from '../images/myWeather.png';
import koviIcon from '../images/kovi-designs.png';
import { FullpageSection } from '@ap.cx/react-fullpage';

function Projects() {
  const [ myProjects ] = useState([
    {
      name: "myBrary",
      Description: 'myBrary is a simple mock library for storing data on ones book\'s. Built with HTML, CSS & JS.',
      imageSrc: myBraryIcon,
      link: 'https://malopro.github.io/Library/',     
    },
    {
      name: "CV-maker",
      Description: 'This is a Resume generator. Enables downloading of resume as PDF. Built with ReactJS.',
      imageSrc: cvIcon,
      link: 'https://malopro.github.io/project-cv/'
    },
    {
      name: "myWeayher",
      Description: 'myWeather is a project that demonstrates the use of API to fetch external datafrom other websites.',
      imageSrc: myWeatherIcon,
      link: 'https://malopro.github.io/WeatherApp/',
    },
    {
      name: "Kovi-Designs",
      Description: 'A furniture e-commerce website',
      imageSrc: koviIcon,
      link: 'https://malopro.github.io/kovi-designs/',
    },
    {
      name: "Project Three",
      Description: 'Lorem Ipsum',
    },
    {
      name: "Project Four",
      Description: 'Lorem Ipsum',
    },
  ])

  const projectList = myProjects.map((project) => 
    <a href={project.link} target='_blank' key={project.name} className='myProject' rel="noreferrer">
      <div style={{ backgroundImage: `url(${project.imageSrc})`,}}></div>
      <div className='projectName'>{project.name}</div>
      <div className='projectDesc'>{project.Description}</div>
    </a>
  )

  return ( 
    <FullpageSection className='projects'>
      <h1 data-aos='zoom-out'>Projects</h1>
      <div className='container' data-aos='fade-up'>{projectList}</div>
    </FullpageSection>
   );
}

export default Projects;