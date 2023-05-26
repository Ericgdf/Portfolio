import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import Scrollicon from '../assets/Icon/scroll.png';
import '../css/LandingPage.css';
import '../css/PresentationSection.css'

const LandingPage = () => {
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
          .fromTo(bioPresentation.current, {opacity : 0}, {opacity : 1})


  }, []); 

  return (

    <div className="landing-page-background" ref={landingPageBackground}>
      <div className="background-form" ref={formZoomInRef}>
        <div className='presentation-section-background' ref ={presentationBackground}>
        <div className="about-me-section">
              <p className='title-presentation top' >About</p>
                  <div className='ring-picture' ref= {aboutMyselfElement}>
                  </div>
              <p className='title-presentation bottom'>Myself</p>
        </div>
        <p className="text-presentation" ref={bioPresentation}>
        I am a freshly graduated  web developer. Drawn to the charm of the Basque Country, I chose to settle in this region renowned for its emphasis on nature and outdoor sports. Combining my passion for technology with my love for nature, I am currently seeking an apprenticeship in a socially responsible and solidarity-based company. I aspire to contribute to projects that merge technological development with positive social impact, utilizing my skills to serve a cause that is close to my heart.
        </p>
      </div>
      </div>
      <div className="text-landing-page" ref={introText}>
        <p className="text-landing-page">Hello, I'm Eric</p>
        <h1 className="title-landing-page">Web Developer</h1>
        <p className="text-landing-page">Welcome to my portfolio</p>
      </div>
      <img className="scroll-icon" src={Scrollicon} alt="icon scroll" ref={scrollIconRef} />
    </div>

  );
};

export default LandingPage;
