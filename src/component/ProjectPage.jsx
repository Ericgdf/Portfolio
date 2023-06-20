import React from "react";

import { useRef, useEffect, useState } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import { Link, useParams } from "react-router-dom";
import "../css/ProjectPage.css";

const ProjectPage = ({ infoProject }) => {
  const [projectChoose, setProjectChoose] = useState([""]);
  const [videoDom, setVideoDom] = useState(null);
  const videoRef = useRef(null);

  const { id } = useParams();
  useEffect(() => {
    const notEmptyVideo =
      infoProject && infoProject.filter((el) => el.id === parseInt(id));
    setProjectChoose(notEmptyVideo);

    setVideoDom(
      <video ref={videoRef} controls>
        <source
          src={notEmptyVideo && notEmptyVideo[0].videoLink}
          type="video/mp4"
        />
        Votre navigateur ne prend pas en charge la vidéo.
      </video>
    );
  }, [id]);

  gsap.registerPlugin(ScrollTrigger);

  const titleTop = useRef(null);
  const titleBottom = useRef(null);
  const content = useRef(null);
  const trigger = useRef(null);

  const backgroundColor = {
    backgroundColor: projectChoose && projectChoose[0].bckgColor,
  };

  return (
    <div className="project-demo-bckg" ref={trigger} style={backgroundColor}>
      <p className="projet-name right" ref={titleTop}>
        {projectChoose && projectChoose[0].name}
      </p>
      <div className="main-content" ref={content}>
        <p className="description">
          {projectChoose && projectChoose[0].description}
        </p>

        {videoDom}

        <div className="stack">
          <p className="tools">Technologies</p>
          <p className="tools text">
            {projectChoose && projectChoose[0].stack}
          </p>
        </div>
        <div className="link-to">
          {projectChoose && projectChoose[0].websiteLink === "" ? null : (
            <a
              className="button-link"
              href={projectChoose && projectChoose[0].websiteLink}
              target="_blank"
            >
              <div>Link to the website</div>
            </a>
          )}

          {projectChoose && projectChoose[0].repoLink === "" ? null : (
            <a
              className="button-link"
              href={projectChoose && projectChoose[0].repoLink}
              target="_blank"
            >
              <div>Link to the repo</div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
