import React from "react";
import "../styles/Home.css";
import Typewriter from "typewriter-effect";
import pic from "../assets/dudeandi.jpg";

function Home() {
  return (
    <div className="home">
      {/* <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }} className = "flex-container"> */}
        <div className="about">
          <div class="about-content">
            <div class="column left">
              <div className="text-1"> Hello, my name is</div>
              <div className="name">Rosendo Vasquez II</div>
              <div className="text-1">
                And I'm a{" "}
                <span style={{display:"inline-block"}}>
                  <Typewriter
                    options={{
                      strings: ["Web Developer", "Ethical Hacker"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>
              <div className="prompt">
                <p>A software developer with a passion for learning and creating</p>
              </div>
            </div>
            <div class="column right">
              <div className = "homeImage"><img src={pic} height={450} width={360} alt="Missing Imagery"></img></div>
            </div>
          </div>
        </div>
      {/* </div> */}
      <div className="skills">
        <h1> Skills</h1>
        <div class="about-content">
          <ol className="list">
            <li className="item">
              <h2>Front-end</h2>
              <span>ReactJS, HTML, CSS, NPM</span>
            </li>
            <li className="item">
              <h2>Back-end</h2>
              <span>NodeJS, ExpressJS, MongoDB, AWS S3</span>
            </li>
            <li className="item">
              <h2>Languages</h2>
              <span>Javascript, Java, Python, C#, C, C++</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;
