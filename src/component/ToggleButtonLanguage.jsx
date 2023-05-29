import React from 'react'
import '../css/ToggleButtonLanguage.css'

const ToggleButtonLanguage = ({handleToggleButton, toggleButton}) => {
  return (
    <div className='toggle-bckg' onClick={handleToggleButton}>
        {toggleButton 
        ?  <p className="language">🌍 FR</p> 
        :  <p className="language">🌍 EN</p>  }     
    </div>
  )
}

export default ToggleButtonLanguage
