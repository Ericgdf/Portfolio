import React from "react";
import "../css/Project.css";
import { Link } from "react-router-dom";

const ProjectPresentation = ({
  name,
  description,
  imageLink,
  id,
  toggleButtonLanguague,
  stack,
}) => {
  return (
    <div className="prez-project-background">
      <div className="text-project-section">
        <h1 className="title-project"> {name} </h1>
        <p className="resume-project"> {description} </p>
        <Link to={`/project/${id}`} className="link-to">
          <p className="see-more">+</p>
        </Link>
      </div>
      <div className="img-section">
        <div className="link"></div>
        <Link to={`/project/${id}`}>
          <img className="img-prez" src={imageLink} alt="" />
        </Link>

        <div
          className={id % 2 === 0 ? "color-square even" : "color-square odd"}
        ></div>
      </div>
    </div>
  );
};

export default ProjectPresentation;
