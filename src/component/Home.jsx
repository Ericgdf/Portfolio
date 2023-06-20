import React, { useEffect, useState } from "react";
import ToggleButtonLanguage from "./ToggleButtonLanguage";
import LandingPage from "./LandingPage";
import Project from "./Project";
import StackSection from "./StackSection";
import ContactMe from "./ContactMe";
import ProjectPage from "./ProjectPage";

const Home = ({
  toggleButtonLanguage,
  handleToggleButtonLanguage,
  infoProject,
}) => {
  return (
    <div>
      <ToggleButtonLanguage
        toggleButtonLanguage={toggleButtonLanguage}
        handleToggleButtonLanguage={handleToggleButtonLanguage}
      />
      <LandingPage toggleButtonLanguage={toggleButtonLanguage} />
      <Project
        toggleButtonLanguage={toggleButtonLanguage}
        infoProject={infoProject}
      />
      <StackSection toggleButtonLanguage={toggleButtonLanguage} />
      <ContactMe toggleButtonLanguage={toggleButtonLanguage} />
    </div>
  );
};

export default Home;
