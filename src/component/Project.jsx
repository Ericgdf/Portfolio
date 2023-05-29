import React from 'react'
import ProjectPresentation from './ProjectPresentation'
import agenceMockUp from '../assets/mock-up/agence mock-up.png'
import illuxplorationMockUp from '../assets/mock-up/illuxploration mock-up.png'
import spotCast from '../assets/mock-up/Spotcast.png'
import undefined from '../assets/mock-up/Undefined.png'



import '../css/Project.css'


const Project = ({toggleButtonLanguague}) => {

    const infoProjet = [
        {
            id : 2,
            name : toggleButtonLanguague  ? 'Projet Spotcast' : 'Surf Spotcast',
            description : toggleButtonLanguague 
                ? 'Ce projet de groupe avait pour objectif de créer un site web de prévisions de surf pour le Pays Basque, fournissant des données en temps réel et des prédictions sur 7 jours, offrant aux surfeurs des informations précises pour les aider dans leur pratique'
                :'This group project as for objective to create a surf forecasting website for the Basque Country, providing real-time data and 7-day predictions, empowering surfers with accurate information.',
            imageLink :spotCast,
            websiteLink : ""
        },
     
        {
            id : 3,
            name : 'Hackaton / Search Bar',
            description : toggleButtonLanguague 
                ? "En groupe, nous avons créé une barre de recherche d'événements mondiale, permettant aux utilisateurs de trouver des événements dans différents pays du monde, offrant ainsi une manière fluide de découvrir et d'explorer divers événements culturels." 
                : "In group we create a global event search bar, enabling users to find events across countries worldwide, providing a seamless way to discover and explore various cultural happenings.",
            imageLink :undefined,
            websiteLink : "https://undefined-ashitaaka.vercel.app/"
        },
        {
            id : 4,
            name : "Illuxploration ",
            description : toggleButtonLanguague 
                ? "L'objectif de ce projet était de créer un site web esthétiquement attrayant pour présenter des illustrations, mettant en valeur l'univers de l'illustrateur et son style."
                : "The goal of this project was to create a visually appealing website for showcasing illustrations, emphasizing his unique artistry and creative expression.",
            imageLink :illuxplorationMockUp,
            websiteLink : "https://illuxploration.com/"
        },
        {
            id : 1,
            name : toggleButtonLanguague ? "Cabinet d'architecture" : 'Architect WebSite',
            description : toggleButtonLanguague 
                ? "J'ai entrepris ce projet dans le but de fournir une visibilité maximale en ligne pour le cabinet d'architecture. En mettant en avant ses valeurs et ses projets, le but était de faire un site convaincant, attirant de nouveaux clients."
                : 'I undertook this project with the aim of providing maximum online visibility for the architectural firm. By highlighting its values and projects, the goal was to create a compelling website that would attract new clients.',
            imageLink :agenceMockUp,
            websiteLink : 'http://www.godefroyarchitectes.com/'
        }


    ]
  return (
    <div className='project-background'>
        <h2 className='section-title'>{toggleButtonLanguague ? "Projet" : "Project"}</h2>
        {infoProjet.map(project => (
            <ProjectPresentation key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            imageLink={project.imageLink}
            websiteLink={project.websiteLink}
            toggleButtonLanguague ={toggleButtonLanguague}
            />
        ))}
        
    </div>
  )
}

export default Project