import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItemFuture({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/futureProject/" + id);
      }}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bgImage"
      ></div>
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectItemFuture;