
import LandingPage from './component/LandingPage'
import PresentationSection from './component/PresentationSection'

import './css/LandingPage.css'
import './css/PresentationSection.css'
import '././css/App.css'


function App() {
   

 /* gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {

    const zoomTl = gsap.timeline({
        scrollTrigger:{
            trigger:".landing-page-background",
            scrub: 2,
            start: "top top",
            pin:".landing-page-background",
            markers: { 
                startColor: "purple",
                endColor: "fuchsia",
                fontSize: "1.5rem",
                indent: 200,
            }
    }});
        
        zoomTl.to("background-form",{width: "100%", height: "100%", duration: 10})
         
  },[])*/
  return (
      <div>
          <LandingPage />
          <PresentationSection />
      </div>

  )
}

export default App
