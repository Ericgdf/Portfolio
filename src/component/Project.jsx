import React from 'react'
import ProjectPresentation from './ProjectPresentation'
import agenceMockUp from '../assets/mock-up/agence mock-up.png'
import illuxplorationMockUp from '../assets/mock-up/illuxploration mock-up.png'
import spotCast from '../assets/mock-up/spotcast.png'
import undefined from '../assets/mock-up/Undefined.png'



import '../css/Project.css'


const Project = () => {

    const infoProjet = [
        {
            id : 2,
            name : 'Surf Forecast Project',
            description : 'This group project as for objective to create a surf forecasting website for the Basque Country, providing real-time data and 7-day predictions, empowering surfers with accurate information.',
            imageLink :spotCast,
            websiteLink : ""
        },
     
        {
            id : 3,
            name : 'Hackaton / Search Bar',
            description : 'In group we create a global event search bar, enabling users to find events across countries worldwide, providing a seamless way to discover and explore various cultural happenings.',
            imageLink :undefined,
            websiteLink : "https://undefined-ashitaaka.vercel.app/"
        },
        {
            id : 4,
            name : 'Illustration website',
            description : 'The goal of this project was to create a visually appealing website for showcasing illustrations, emphasizing their unique artistry and creative expression.',
            imageLink :illuxplorationMockUp,
            websiteLink : "https://illuxploration.com/"
        },
        {
            id : 1,
            name : 'Architect WebSite',
            description : 'I undertook this project to provide maximum online visibility for the architectural firm. By highlighting its values and projects, I created a compelling website, attracting new clients and allowing the firm to stand out in the industry.',
            imageLink :agenceMockUp,
            websiteLink : 'http://www.godefroyarchitectes.com/'
        }


    ]
  return (
    <div className='project-background'>
        <h2 className='section-title'>Project</h2>
        {infoProjet.map(project => (
            <ProjectPresentation key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            imageLink={project.imageLink}
            websiteLink={project.websiteLink}
            />
        ))}
        
    </div>
  )
}

export default Project