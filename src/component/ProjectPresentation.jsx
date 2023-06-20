import React from 'react'
import '../css/Project.css'
import { Link } from "react-router-dom";


const ProjectPresentation = ({name, description, imageLink, websiteLink,id, toggleButtonLanguague, stack}) => {
  return (
      <div className="prez-project-background">
        <div className="text-project-section">
          <h1 className="title-project"> {name} </h1>
          <p className="resume-project"> {description} </p>
          <p className="resume-project">{stack}</p>
          {websiteLink === "" 
          ? "" 
          : <a className="link-project" href= {websiteLink} target='_blank'> {toggleButtonLanguague ? "Voir le site web" : "Go to the website"}</a>
          }
        </div>
        <div className="img-section">
          <div className= "link"></div>
          <Link to={`/project/${id}`}>
           <img className ="img-prez"src={imageLink} alt="" />
          </Link>

          <div className={id % 2 === 0 ? "color-square even" : "color-square odd"}></div>
        </div>
    </div>
  )
}

export default ProjectPresentation