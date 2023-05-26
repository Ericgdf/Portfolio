
import LandingPage from './component/LandingPage'
import Project from './component/Project'
import StackSection from './component/StackSection'
import ContactMe from './component/ContactMe'
import ProjectDemo from './component/ProjectDemo'

import { useEffect, useState } from 'react'


import './css/LandingPage.css'
import './css/PresentationSection.css'
import '././css/App.css'




function App() {

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
          <LandingPage />
          <Project />
          <StackSection />
          <ContactMe />
          
          
     </div>
  )
}

export default App
