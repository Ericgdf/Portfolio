import React from 'react'
import { gsap, ScrollTrigger } from 'gsap/all';
import { useRef, useEffect } from 'react';
import '../css/StackSection.css'
import pinterest from '../assets/Icon/pinterest.png'
import figma from '../assets/Icon/Figma.png'
import adobeAi from '../assets/Icon/adobe-illustrator.png'
import javascript from '../assets/Icon/javascript.png'
import reactIcon from '../assets/Icon/react.png'
import wordpress from '../assets/Icon/wordpress.png'
import elementor from '../assets/Icon/elementor.png'
import express from '../assets/Icon/express-js.png'
import mysql from '../assets/Icon/mysql.png'
import node from '../assets/Icon/node-js.png'


const StackSection = () => {

    gsap.registerPlugin(ScrollTrigger);

    const lineLeft = useRef(null)
    const lineRight = useRef(null)
    const designSection = useRef(null)
    const frontSection = useRef(null)
    const backSection = useRef(null)
    const stackBackground = useRef(null)
    const firstTrigger = useRef(null)
    

    useEffect(() => {
    
       // zoom in effect
    
       const lineTl = (gsap.timeline({
        scrollTrigger: {
          trigger: stackBackground.current,
          start: 'top center',
          end: 'bottom bottom',
          scrub : 3,
          reversed: false,
         /* markers: {
            startColor: 'purple',
            endColor: 'fuchsia',
            fontSize: '1.5rem',
            indent: 200,
          },*/
        },
      }))
        
       
      lineTl.fromTo(designSection.current,{opacity : 0}, {opacity : 1})
            .fromTo(lineLeft.current,{opacity : 0}, {opacity : 1})
            .fromTo(lineLeft.current,{width : 0, height:"0.5em"}, {width: "15em"})
            .fromTo(lineLeft.current,{height:"0.5em"}, {height: "10em"})
            .fromTo(frontSection.current,{opacity : 0}, {opacity : 1})
            .fromTo(lineRight.current,{x:0}, {x:-200})
            .fromTo(lineRight.current,{y:0}, {y:200})
            .fromTo(backSection.current,{opacity : 0}, {opacity : 1})
            

    
    
    
      }, []);
  return (
    <div className='stack-background' ref={stackBackground}>
        <h1 className="stack-title" ref= {firstTrigger}>Stack</h1>
        <div className='travel-section'>
            <div className="design-section" ref={designSection}>
                <p className="explanation">First came the idea</p>
                <div className="icon-container">
                    <div className="element-icon">
                        <img className='icon' src={pinterest} />
                        <p className='icon-name'>Pinterest</p>
                    </div>
                    <div className="element-icon">
                        <img className='icon' src={figma} />
                        <p className='icon-name'>Figma</p>
                    </div>
                    <div className="element-icon">
                        <img className='icon' src={adobeAi} />
                        <p className='icon-name'>Adobe Ai</p>
                    </div>
                </div>
            </div>
            <div className='line' ref={lineLeft}></div>
        </div>
        <div className='travel-section'>
            <div className='line-section'>
                <div className='hide-line' ref={lineRight}></div>
                <div className='line right' ></div>
            </div>
            <div className="design-section right" ref={frontSection}>
                <p className="explanation">Then time to design front-end</p>
                <div className="icon-container">
                    <div className="element-icon">
                        <img className='icon' src={javascript} />
                        <p className='icon-name'>Javascript</p>
                    </div>
                    <div className="element-icon">
                        <img className='icon' src={reactIcon} />
                        <p className='icon-name'>React.Js</p>
                    </div>
                    <div className="element-icon">
                        <img className='icon' src={wordpress} />
                        <p className='icon-name'>Wordpress</p>
                    </div>
                    <div className="element-icon">
                        <img className='icon' src={elementor} />
                        <p className='icon-name'>Elementor</p>
                    </div>
                </div>
            </div>  
        </div>
        <div className='travel-section'>
            
            <div className="design-section" ref={backSection}>
                <p className="explanation">And if we need back-end</p>
                <div className="icon-container">
                    <div className="element-icon">
                        <img className='icon' src={express} />
                        <p className='icon-name'>Express JS</p>
                    </div>
                    <div className="element-icon">
                        <img className='icon' src={mysql} />
                        <p className='icon-name'>MySql</p>
                    </div>
                    <div className="element-icon">
                        <img className='icon' src={node} />
                        <p className='icon-name'>Node.JS</p>
                    </div>
                </div>
            </div> 
        </div>
        

    </div>
  )
}

export default StackSection