import ProjectPage from "./component/ProjectPage";
import Home from "./component/Home";

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import agenceMockUp from "./assets/mock-up/agence mock-up.png";
import escapeRoom from "./assets/mock-up/escape-room.jpg";
import EmmausConnect from "./assets/mock-up/Emmaus-connect.png"
import illuxplorationMockUp from "./assets/mock-up/illuxploration mock-up.png";
import spotCast from "./assets/mock-up/Spotcast.png";
import undefined from "./assets/mock-up/Undefined.png";
import escapeRoomVideo from "./assets/video/escape-room-video.mp4"
import illuxplorationVideo from "./assets/video/illuxploration-prez.mp4";
import architectureVideo from "./assets/video/architectureVideo.mp4";
import spotcastVideo from "./assets/video/spotcastVideo.mp4";
import undefinedVideo from "./assets/video/undefined.mp4";
import emmausConnectVideo from "./assets/video/Emmaus-connect.mp4"


import "./css/LandingPage.css";
import "./css/PresentationSection.css";
import "././css/App.css";

function App() {
  const [toggleButtonLanguage, setToggleButtonLanguage] = useState(true);

  const handleToggleButtonLanguage = () => {
    setToggleButtonLanguage(!toggleButtonLanguage);
  };

  useEffect(() => {
    console.log(toggleButtonLanguage);
  }, [toggleButtonLanguage]);

  const infoProject = [
    {
      id: 6,
      name: toggleButtonLanguage ? "Escape Room" : "Escape Room",
      description: toggleButtonLanguage
        ?"L'objectif de ce projet était de créer une V1 d'escape room. J'ai toujours beaucoup aimé les escape games et cela faisait longtemps que j'avais envie d'essayer d'en créer une virtuel. Également, cela m'a permis d'aborder mes premières notions en TypeScript."
        : "The objective of this project was to create a version 1 of an escape room. I have always enjoyed escape games, and it had been a long time since I wanted to try creating a virtual one. Additionally, it allowed me to explore my first notions of TypeScript.",
      imageLink: escapeRoom,
      websiteLink: "https://escape-room-eric-gdf.vercel.app/",
      stack: "Figma | TypeScript | React.js | HTML | CSS",
      videoLink: escapeRoomVideo,
      repoLink: "https://github.com/Ericgdf/Escape-room",
      bckgColor: "#B0CDCE",
    },
    {
      id: 5,
      name: toggleButtonLanguage ? "Emmaus Connect Hackathon" : "Emmaus Connect Hackathon",
      description: toggleButtonLanguage
        ? "L'objectif de ce projet de groupe était de créer un site interne pour Emmaüs Connect, permettant de définir un prix de vente pour un don de téléphone en se basant sur ses caractéristiques et son état, puis d'envoyer ce téléphone en base de données. Nous avions 48 heures en groupe de 5 personnes."
        : "The objective of this group project was to create an internal website for Emmaüs Connect that would allow us to determine a selling price for a donated phone based on its characteristics and condition, and then send this phone to a database. We had 48 hours with a group of 5 people.",
      imageLink: EmmausConnect,
      websiteLink: "http://146.59.227.110:3030/",
      stack: "Figma | JS | React.js | Express.js | MySql | HTML | CSS",
      videoLink: emmausConnectVideo,
      repoLink: "https://github.com/Elolecroco/hackathon_emmaus",
      bckgColor: "#D5B2A9",
    },
    {
      id: 2,
      name: toggleButtonLanguage ? "Projet Spotcast" : "Surf Spotcast",
      description: toggleButtonLanguage
        ? "Ce projet de groupe avait pour objectif de créer un site web de prévisions de surf pour le Pays Basque, fournissant des données en temps réel et des prédictions sur 7 jours, offrant aux surfeurs des informations précises pour les aider dans leur pratique"
        : "This group project as for objective to create a surf forecasting website for the Basque Country, providing real-time data and 7-day predictions, empowering surfers with accurate information.",
      imageLink: spotCast,
      websiteLink: "",
      stack: "Figma | JS | React.js | Express.js | MySql | HTML | CSS",
      videoLink: spotcastVideo,
      repoLink: "https://github.com/WildCodeSchool/2023-02-js-btz-spotcast",
      bckgColor: "#B0CDCE",
    },

    {
      id: 3,
      name: "Hackaton / Search Bar",
      description: toggleButtonLanguage
        ? "En groupe, nous avons créé une barre de recherche d'événements mondiale, permettant aux utilisateurs de trouver des événements dans différents pays du monde, offrant ainsi une manière fluide de découvrir et d'explorer divers événements culturels."
        : "In group we create a global event search bar, enabling users to find events across countries worldwide, providing a seamless way to discover and explore various cultural happenings.",
      imageLink: undefined,
      websiteLink: "https://undefined-ashitaaka.vercel.app/",
      stack: "Figma | JS | React.js | HTML | CSS",
      videoLink: undefinedVideo,
      repoLink: "https://github.com/Ashitaaka/undefined",
      bckgColor: "#D5B2A9",
    },
    {
      id: 4,
      name: "Illuxploration ",
      description: toggleButtonLanguage
        ? "L'objectif de ce projet était de créer un site web esthétiquement attrayant pour présenter des illustrations, mettant en valeur l'univers de l'illustrateur et son style."
        : "The goal of this project was to create a visually appealing website for showcasing illustrations, emphasizing his unique artistry and creative expression.",
      imageLink: illuxplorationMockUp,
      websiteLink: "https://illuxploration.com/",
      stack: "Wordpress | Elementor",
      videoLink: illuxplorationVideo,
      repoLink: "",
      bckgColor: "#B0CDCE",
    },
    {
      id: 1,
      name: toggleButtonLanguage
        ? "Cabinet d'architecture"
        : "Architect WebSite",
      description: toggleButtonLanguage
        ? "J'ai entrepris ce projet dans le but de fournir une visibilité maximale en ligne pour le cabinet d'architecture. En mettant en avant ses valeurs et ses projets, le but était de faire un site convaincant, attirant de nouveaux clients."
        : "I undertook this project with the aim of providing maximum online visibility for the architectural firm. By highlighting its values and projects, the goal was to create a compelling website that would attract new clients.",
      imageLink: agenceMockUp,
      websiteLink: "http://www.godefroyarchitectes.com/",
      stack: "Wordpress | Elementor",
      videoLink: architectureVideo,
      repoLink: "",
      bckgColor: "#D5B2A9",
    },
  ];

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWidth);

    handleWidth();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              toggleButtonLanguage={toggleButtonLanguage}
              handleToggleButtonLanguage={handleToggleButtonLanguage}
              infoProject={infoProject}
            />
          }
        />
        <Route
          path="/project/:id"
          element={
            <ProjectPage
              infoProject={infoProject}
              toggleButtonLanguage={toggleButtonLanguage}
              handleToggleButtonLanguage={handleToggleButtonLanguage}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
