import React from 'react'
import { Link } from "react-router-dom";

import ProjectPresentation from '../component/ProjectPresentation'



import '../css/Project.css'



const Project = ({toggleButtonLanguage, infoProject}) => {

    
  return (
    <div className='project-background' >
        <h2 className='section-title' >{toggleButtonLanguage ? "Projet" : "Project"}</h2>
        {infoProject.map(project => (
                <ProjectPresentation key={project.id}
                    id={project.id}
                    name={project.name}
                    description={project.description}
                    imageLink={project.imageLink}
                    websiteLink={project.websiteLink}
                    toggleButtonLanguage ={toggleButtonLanguage}
                    stack ={project.stack}
                />
        ))}
        
    </div>
  )
}

export default Project