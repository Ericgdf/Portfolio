import { useState, useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import Scrollicon from '../assets/Icon/scroll.png';
import '../css/LandingPage.css';

const LandingPage = () => {
  gsap.registerPlugin(ScrollTrigger);

  const scrollIconRef = useRef(null);
  const formZoomInRef = useRef(null);
  const landingPageBackground = useRef(null);

  useEffect(() => {
    // mouse move effect
    gsap.to(scrollIconRef.current, {
      y: '-=10',
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      duration: 2,
    });

   /* // zoom in effect
    const zoomTl = gsap.timeline({
      scrollTrigger: {
        trigger: landingPageBackground.current,
        ease: 'power1.inOut',
        scrub: 4,
        start: 'top top',
        pinSpacing: false,
        pin: landingPageBackground.current,
        markers: {
          startColor: 'purple',
          endColor: 'fuchsia',
          fontSize: '1.5rem',
          indent: 200,
        },
      },
    });*/

    gsap.fromTo(
      formZoomInRef.current,
      {
        height: '60vh',
        width: '20vw',
      },
      {
        height: '100vh',
        width: '100vw',
        borderRadius: 0,
        duration: 5,
        delay: 2,
      }
    );
  }, []);

  return (

    <div className="landing-page-background" ref={landingPageBackground}>
      <div className="background-form" ref={formZoomInRef}></div>
      <div className="text-landing-page">
        <p className="text-landing-page">Hello, I'm Eric</p>
        <h1 className="title-landing-page">Web Developer</h1>
        <p className="text-landing-page">Welcome to my portfolio</p>
      </div>
      <img className="scroll-icon" src={Scrollicon} alt="icon scroll" ref={scrollIconRef} />
    </div>

  );
};

export default LandingPage;
