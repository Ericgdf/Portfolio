
import LandingPage from './component/LandingPage'
import Project from './component/Project'
import StackSection from './component/StackSection'
import ContactMe from './component/ContactMe'


import './css/LandingPage.css'
import './css/PresentationSection.css'
import '././css/App.css'



function App() {
 
  return (
    <div className='Problemos' >
          <LandingPage />
          <Project />
          <StackSection />
          <ContactMe />
     </div>
  )
}

export default App
