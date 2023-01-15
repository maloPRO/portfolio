import React from "react";
import '../styles/about.css';

const About = () => {

  return (
    <div className="about">
      <div className="aboutCard">
        <div className="skills">
          <div className="profile">
            <div className="profilePic"></div>
            <div className="profileDetails">
              <p><span>Name:</span> Gilbert Malova</p>
              <p><span>Role:</span> Full-Stack Developer</p>
              <p><span>Email:</span> malovagilbert@gmail.com</p>
              <p><span>Phone:</span> +254 792 184 923</p>
            </div>
          </div>
          <div className="mySkills">
            <h3>Skills</h3>
            <div className="html">
              <p className="mySkill">HTML 100%</p>
              <div className="bar"><p></p></div>
            </div>
            <div className="css">
              <p className="mySkill">CSS 90%</p>
              <div className="bar"><p></p></div>
            </div>
            <div className="js">
              <p className="mySkill">JavaScript 75%</p>
              <div className="bar"><p></p></div>
            </div>
            <div className="mongo">
              <p className="mySkill">MongoDB 80%</p>
              <div className="bar"><p></p></div>
            </div>
            <div className="express">
              <p className="mySkill">ExpressJS 70%</p>
              <div className="bar"><p></p></div>
            </div>
            <div className="react">
              <p className="mySkill">React 85%</p>
              <div className="bar"><p></p></div>
            </div>
            <div className="node">
              <p className="mySkill">NodeJS 80%</p>
              <div className="bar"><p></p></div>
            </div>
          </div>
        </div>
        <div className="details">
          <h2>About Me</h2>
          <div className="aboutMe">
            <p>
              I am a full-stack web developer with a focus on the MERN stack (MongoDB, Express.js, React.js, and Node.js). 
              I have a passion for building dynamic and responsive web applications that provide an intuitive user experience.
            </p>
            <p>
              My expertise includes designing and implementing RESTful APIs, creating scalable and maintainable code, 
              and utilizing modern front-end libraries and frameworks. I have experience working on various projects, 
              from small start-ups to large enterprise applications. My skills also extend to version control, testing, 
              and deployment on various platforms.
            </p>
            <p>
              I am always eager to learn new technologies and methodologies that can help 
              improve the development process and the end product. 
              My ultimate goal is to deliver well-crafted, high-performance 
              web applications that meet the needs of my clients and users.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;