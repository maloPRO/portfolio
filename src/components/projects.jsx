import React from 'react';
import { useState } from 'react';
import '../styles/projects.css';
import myBraryIcon from '../images/myBrary.png';

function Projects() {
  const [ myProjects ] = useState([
    {
      name: "myBrary",
      Description: 'myBrary is a simple mock library for storing data on ones book\'s',
      imageSrc: {myBraryIcon},
      
    },
    {
      name: "Project One",
      Description: 'Lorem Ipsum',
    },
    {
      name: "Project One",
      Description: 'Lorem Ipsum',
    },
    {
      name: "Project One",
      Description: 'Lorem Ipsum',
    },
    {
      name: "Project One",
      Description: 'Lorem Ipsum',
    },
    {
      name: "Project One",
      Description: 'Lorem Ipsum',
    },
  ])

  const projectList = myProjects.map((project) => 
    <a href='https://malopro.github.io/Library/' target='_blank' key={project.name} className='myProject' rel="noreferrer">
      <div className={project.name}></div>
      <div className='projectName'>{project.name}</div>
      <div className='projectDesc'>{project.Description}</div>
    </a>
  )

  return ( 
    <div className='projects'>
      <h1>Projects</h1>
      <div className='container'>{projectList}</div>
    </div>
   );
}

export default Projects;