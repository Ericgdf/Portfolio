import React from "react";
import "../css/ContactMe.css";
import github from "../assets/Icon/github.png";
import linkedin from "../assets/Icon/linkedin.png";
import email from "../assets/Icon/email.png";
import cv from "../assets/Icon/website-logo.png";
import cvFiles from "../assets/document/CV-ERIC-GODEFROY-2023-FR.pdf";

const ContactMe = ({ toggleButtonLanguage }) => {
  return (
    <div className="contact-background">
      <h1 className="contact-title">
        {toggleButtonLanguage ? "Me contacter" : "Contact Me"}
      </h1>
      <div className="icon-section-contact">
        <a href="https://github.com/Ericgdf" target="_blank">
          <img className="icon-contact" src={github} />
        </a>
        <a
          href="https://www.linkedin.com/in/eric-godefroy-b31501105/"
          target="_blank"
        >
          <img className="icon-contact" src={linkedin} />
        </a>
        <a href="mailto:ericgodefroy@outlook.fr">
          <img className="icon-contact" src={email} />
        </a>
      </div>
      <div className="cv-section">
        <p className="cv-text">
          {toggleButtonLanguage ? "Voir mon CV" : "See my resume"}
        </p>
        <a href={cvFiles} download>
          <img className="icon-cv" src={cv} />
        </a>
      </div>
      <p className="credit">
        {toggleButtonLanguage
          ? "Fait avec amour et React"
          : "Made with heart and React"}
      </p>
    </div>
  );
};

export default ContactMe;
