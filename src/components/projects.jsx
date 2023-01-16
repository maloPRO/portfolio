import React from 'react';
import { useState } from 'react';
import '../styles/projects.css';
import myBraryIcon from '../images/myBrary.png';
import cvIcon from '../images/cv.png';
import myWeatherIcon from '../images/myWeather.png';

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
      name: "Project Two",
      Description: 'Lorem Ipsum',
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
    <div className='projects'>
      <h1>Projects</h1>
      <h3>Here are some of the cool projects I've built</h3>
      <div className='container'>{projectList}</div>
    </div>
   );
}

export default Projects;