import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import Scrollicon from '../assets/Icon/scroll.png';
import '../css/LandingPage.css';
import '../css/PresentationSection.css'

const LandingPage = ({toggleButtonLanguague}) => {

  
  gsap.registerPlugin(ScrollTrigger);

  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWidth)

    handleWidth()
  },[])

  const scrollIconRef = useRef(null);
  const formZoomInRef = useRef(null);
  const landingPageBackground = useRef(null);
  const introText = useRef(null)
  const presentationBackground =useRef(null);
  const aboutMyselfElement = useRef(null)
  const bioPresentation = useRef(null)


  useEffect(() => {
    // mouse move effect
    gsap.to(scrollIconRef.current, {
      y: '-=15',
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      duration: 1,
    });

   // zoom in effect

   const zoomTl = (gsap.timeline({
    scrollTrigger: {
      trigger: landingPageBackground.current,
      start: 'top top',
      pin: landingPageBackground.current,
      scrub : 2,
     /* markers: {
        startColor: 'purple',
        endColor: 'fuchsia',
        fontSize: '1.5rem',
        indent: 200,
      },*/
    },
  }))
    
    zoomTl.to(introText.current,{display : 'none', opacity : 0})
          .fromTo(formZoomInRef.current, {height: '60%', width: '20%'}  , { height: '100%', width: '100%', borderRadius: 0,})
          .fromTo(presentationBackground.current,{display : 'none', opacity : 0}, {display : 'flex', opacity : 1})
          .from(aboutMyselfElement.current, {marginRight: 0, marginLeft : 0})
          .fromTo(scrollIconRef.current, {opacity : 1}, {opacity :0})
          .fromTo(bioPresentation.current, {opacity : 0}, {opacity : 1})


  }, []); 

  return (

    <div className="landing-page-background" ref={landingPageBackground}>
      <div className="background-form" ref={formZoomInRef}>
        <div className='presentation-section-background' ref ={presentationBackground}>
        <div className="about-me-section">
              <p className='title-presentation top' >{toggleButtonLanguague ? "A propos" : "About"}</p>
                  <div className='ring-picture' ref= {aboutMyselfElement}>
                  </div>
              <p className='title-presentation bottom'>{toggleButtonLanguague ? "de moi" : "Myself"}</p>
        </div>
        <p className="text-presentation" ref={bioPresentation}>
        {toggleButtonLanguague 
        ? "Je suis un développeur web fraîchement sorti de formation. Avant ma reconverstion j'ai commencé ma carrière dans le domaine du Revenue Management Hôtelier. Originaire de Lyon, j'ai décidé de m'installer au Pays-Basque pour profiter de l'océan et la montagne car j'aime les sports de nature. Actuellement, je suis à la recherche d'une alternance ou d'un emploi dans une entreprise avec des valeurs qui me corresponde. Mon objectif est de combiner ma passion pour la technologie avec mon engagement pour des projets ayant un impact positif. Je suis motivé à contribuer au développement de solutions innovantes et durables pour répondre aux défis sociétaux." 
        : "I am a freshly graduated web developer. Before my career transition, I started my journey in the field of Hotel Revenue Management. Originally from Lyon, I decided to settle in the Basque Country to enjoy the ocean and mountains as I have a love for outdoor sports. Currently, I am actively seeking an apprenticeship or employment opportunity in a company that aligns with my values. My goal is to combine my passion for technology with my commitment to projects that have a positive impact. I am motivated to contribute to the development of innovative and sustainable solutions to address societal challenges."}
        
        </p>
      </div>
      </div>
      <div className="text-landing-page" ref={introText}>
        <p className="text-landing-page">{toggleButtonLanguague ? "Bonjour, je suis Eric" : "Hello, I'm Eric"}</p>
        <h1 className="title-landing-page">{toggleButtonLanguague ? "Developpeur Web" : "Web Developer"}</h1>
        <p className="text-landing-page">{toggleButtonLanguague ? "Bienvenue dans mon portfolio" : "Welcome to my portfolio"}</p>
      </div>
      <img className="scroll-icon" src={Scrollicon} alt="icon scroll" ref={scrollIconRef} />
    </div>

  );
};

export default LandingPage;
