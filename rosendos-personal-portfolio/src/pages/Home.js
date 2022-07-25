import React from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/Home.css";


function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, my name is Rosendo</h2>
        <div className="prompt"> 
          <p> 
            A software developer with a passion for learning and creating
          </p>
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-end</h2>
            <span>
              ReactJS, HTML, CSS, NPM
            </span>
          </li>
          <li className="item">
            <h2>Back-end</h2>
            <span>
              NodeJS, ExpressJS, MongoDB, AWS S3
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Javascript, Java, Python, C#, C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home;