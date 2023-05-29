
import LandingPage from './component/LandingPage'
import Project from './component/Project'
import StackSection from './component/StackSection'
import ContactMe from './component/ContactMe'
import ProjectDemo from './component/ProjectDemo'

import { useEffect, useState } from 'react'


import './css/LandingPage.css'
import './css/PresentationSection.css'
import '././css/App.css'
import ToggleButtonLanguage from './component/ToggleButtonLanguage'




function App() {

  const[toggleButton, setToggleButton] = useState(true)

  const handleToggleButton =() => {
    setToggleButton(!toggleButton)
  }

  useEffect(() => {
    console.log(toggleButton)
  },[toggleButton])

  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWidth)

    handleWidth()
  },[])

  
 
  return (
    <div >
          <ToggleButtonLanguage toggleButton ={toggleButton} handleToggleButton={handleToggleButton} />
          <LandingPage toggleButtonLanguague = {toggleButton}/>
          <Project toggleButtonLanguague = {toggleButton}/>
          <StackSection  toggleButtonLanguague ={toggleButton}/>
          <ContactMe toggleButtonLanguague ={toggleButton}/>
          
          
     </div>
  )
}

export default App
