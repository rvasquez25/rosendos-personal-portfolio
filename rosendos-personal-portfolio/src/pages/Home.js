import React from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/Home.css";
import { useEffect, useState } from "react";
const typing = ['Programmer', 'Ethical Hacker'];

function Home() {
  let [index, setIndex] = useState(0);
  let [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === typing.length - 1 && subIndex === typing[index].length) {
      return;
    }

    if (
      subIndex === typing[index].length + 1 && 
      index !== typing.length - 1 && 
      !reverse 
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === typing[index].length ? 1000 :
                150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <div className="home">
      <div className="about">
        <h2> Hello, my name is</h2>
        <div className = "name">Rosendo Vasquez II</div>
        <h2>And I'm a <span className="typing">{`${typing[index].substring(0, subIndex)}${blink ? "|" : " "}`}</span></h2>
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