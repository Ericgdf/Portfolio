import React from 'react'
import { useRef, useEffect } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all';
import '../css/ProjectDemo.css'
import illuxplorationMock from '../assets/video/illuxploration.webm'

const ProjectDemo = () => {

    gsap.registerPlugin(ScrollTrigger);

    const titleTop = useRef(null)
    const titleBottom= useRef(null)
    const content= useRef(null)
    const trigger =useRef(null)

    useEffect(() => {
    
    
       // zoom in effect
    
       const projetTl = (gsap.timeline({
        scrollTrigger: {
          trigger: trigger.current,
          start: 'top top',
          pin: trigger.current,
          scrub : 5,
         /* markers: {
            startColor: 'purple',
            endColor: 'fuchsia',
            fontSize: '1.5rem',
            indent: 200,
          },*/
        },
      }))
        
        projetTl.fromTo(titleBottom.current,{ x:"-100vw"},{ x: "100vw"})
                .fromTo(titleTop.current,{ x:"+100vw"},{ x: "-100vw"})
    
    
      }, []);


    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
        videoRef.current.play();
        }
    }, []);


  return (
    <div className='project-demo-bckg' ref={trigger}>
        <p className="projet-name right" ref={titleTop}>ILLUXPLORATION</p>
        <div className="main-content" ref = {content}>
          <p className="description">
            The goal of this project was to create a visually appealing website for showcasing illustrations, emphasizing their unique artistry and creative expression..
            </p>
            <video ref={videoRef} autoPlay loop>
            <source src={illuxplorationMock} type="video/mp4" />
            Votre navigateur ne prend pas en charge la vidéo.
            </video>
            <p className="tools">Tools :Wordpress et Elementor</p>
        </div>
        <p className="projet-name left" ref={titleBottom}>ILLUXPLORATION</p>
    </div>
  )
}

export default ProjectDemo