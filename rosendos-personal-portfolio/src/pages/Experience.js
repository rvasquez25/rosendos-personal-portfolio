import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faHeadset, faBook, faRocket } from "@fortawesome/free-solid-svg-icons";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">Pebble Hills High School, El Paso, TX</h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          iconStyle={{ background: "#cf3047", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faHeadset} />}
        >
          <h3 className="vertical-timeline-element-title">Technology Suppport at The University of Texas at El Paso</h3>
          <p>Addressing issues daily via phone, email, or chat regarding password resets, account activations, software 
            installations, remote sessions, and creating requests for documentation purposes. As well as providing 
            customer service with patience and kindness and maintaining a clean workspace when working on campus
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBook} />}
        >
          <h3 className="vertical-timeline-element-title">The University of Texas at El Paso, El Paso, TX</h3>
          <p>Undergraduate, Computer Science, SENIOR</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - Present"
          iconStyle={{ background: "#cf3047", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faRocket} />}
        >
          <h3 className="vertical-timeline-element-title">Web Developer at SPS ARS Aerial Remote Sensing</h3>
          <p>Advanced unmanned aircraft and operations</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
