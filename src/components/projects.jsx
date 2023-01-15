import React from 'react';
import { useState } from 'react';
import '../styles/projects.css';

function Projects() {
  const [ myProjects ] = useState([
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
    {
      name: "Project One",
      Description: 'Lorem Ipsum',
    },
  ])

  const projectList = myProjects.map((project) => 
    <div key={project.name} className='myProject'>
      <p>{project.name}</p>
      <p>{project.Description}</p>
    </div>
  )

  return ( 
    <div className='projects'>
      <h1>Projects</h1>
      <div className='container'>{projectList}</div>
    </div>
   );
}

export default Projects;