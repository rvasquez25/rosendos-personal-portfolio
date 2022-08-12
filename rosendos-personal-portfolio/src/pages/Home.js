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
              <span >
              {/* <span style={{ display: "inline-block" }}> */}
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
              I've began taking an interest in Computer Science before I started college in the Summer of 2019.
              The first language I began learning was Python by watching videos on basic coding and data structures from
              a youtuber named Corey Schafer. At UTEP, I've completed my first three years which have taught me more
              in-depth about C, Java, and Python through courses such as <span>Intro to Computer Science</span>, <span>Elem. Data
              Struct./Algorithms</span>, <span>Data Structures</span>, <span>Computer Security</span>, <span>Software Vulnerabilties</span>
              , and <span>Computer Architecture</span>. I currently work for <span>SPS ARS</span> as a Web Developer who assists in
              front-end and back-end development which has also helped me greatly in understanding the Quasar Framework in HTML, CSS, Javascript 
              and back-end wise increasing my Python and Javascript abilties and understanding basic database management.
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
            <div className="bars">
              <div className="info">
                <span>NodeJS</span>
                <span>Intermediate</span>
              </div>
              <div class="line node"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>ReactJS</span>
                <span>Intermediate</span>
              </div>
              <div class="line react"></div>
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
