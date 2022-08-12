import React from "react";
import { useParams } from "react-router-dom";
import { ProjectInProgress } from "../helpers/ProjectInProgress";
import "../styles/ProjectDisplay.css";

function ProjectDisplayProgress() {
  const { id } = useParams();
  const project = ProjectInProgress[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt=""/>
      <p>
        <b>Skills: </b>
        {project.skills}
      </p>
      <div className="icons">
        {project.icons}
      </div>
    </div>
  );
}

export default ProjectDisplayProgress;
