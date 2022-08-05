import React from "react";
import "../styles/Home.css";
import Typewriter from "typewriter-effect";
import pic from "../assets/dudeandi.jpg";
import cpCertification from "../assets/CodepathCertification.png";
// My favorites: 2, 4, 5, 6, 7, 8
// Israels: 4, 2, 6
import video from "../assets/homeVideo4.mp4";

function Home() {
  return (
    <div className="home">
      <div className="overlay">
        <video src={video} autoPlay loop muted />
      </div>
      {/* <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }} className = "flex-container"> */}
      <div className="about">
        <div class="about-content">
          {/* <div className="overlay"></div> */}
          {/* <video src={video} autoPlay loop muted> */}
          <div class="column left">
            <div className="text-1"> Hello, my name is</div>
            <div className="name">Rosendo Vasquez II</div>
            <div className="text-1">
              And I'm a{" "}
              <span style={{ display: "inline-block" }}>
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
              <p>
                A software developer with a passion for learning and creating with a focus in Cybersecurity
              </p>
            </div>
          </div>
          <div class="column right">
            <div className="homeImage">
              <img
                src={pic}
                height={450}
                width={360}
                alt="Missing Imagery"
              ></img>
            </div>
          </div>
          {/* </video> */}
        </div>
      </div>
      {/* </div> */}
      <div className="skills">
        <h1> Skills</h1>
        <div class="skills-content">
          <div className="column left">
            <div className="text">My Experience.</div>
            <p>
              Python, C, and Java are my stronger languages because I began
              learning these languages in 2019 (freshman year of college). I've
              completed Intro to Computer Science, Elem. Data
              Struct./Algorithms, and Data Structures in Java and Python and I
              as well understand how to implement Data Structure level concepts
              in C. I researched HTML, CSS, and JavaScript on my own time
              freshman year but because of my internship, I've been able to
              practice these languages continously learn and improve my skills.

              
            </p>
            <a
              href="https://youtu.be/dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
          <div className="column right">
            <div className="text">Languages</div>
            <div className="bars">
              <div className="info">
                <span>HTML</span>
                <span>Beginner</span>
              </div>
              <div class="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>CSS</span>
                <span>Beginner</span>
              </div>
              <div class="line css"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Javascript</span>
                <span>Beginner</span>
              </div>
              <div class="line js"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Python</span>
                <span>Intermediate</span>
              </div>
              <div class="line python"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>C</span>
                <span>Intermediate</span>
              </div>
              <div class="line c"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Java</span>
                <span>Intermediate</span>
              </div>
              <div class="line java"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="certifications">
        <h1>Certifications</h1>
        <img src={cpCertification} alt=""></img>
      </div>
    </div>
  );
}

export default Home;
