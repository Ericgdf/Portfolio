import React from 'react'
import '../css/Project.css'

const ProjectPresentation = ({name, description, imageLink, websiteLink,id}) => {
  return (
      <div className="prez-project-background">
        <div className="text-project-section">
          <h1 className="title-project"> {name} </h1>
          <p className="resume-project"> {description} </p>
          {websiteLink === "" 
          ? "" 
          : <a className="link-project" href= {websiteLink} target='_blank'> Go to the website</a>
          }
        </div>
        <div className="img-section">
          <div className= "link"></div>
          <img src={imageLink} alt="" />
          <div className={id % 2 === 0 ? "color-square even" : "color-square odd"}></div>
        </div>
    </div>
  )
}

export default ProjectPresentation