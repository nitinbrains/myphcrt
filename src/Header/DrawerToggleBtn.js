import React from 'react'
import './DrawerToggleBtn.css'
 const DrawerToggleBtn=(props) => {
  return (
    <div>
      <button className="toggle-button">
          <div className="toggle-button_line"/>
          <div className="toggle-button_line"/>
          <div className="toggle-button_line"/>
      </button>
    </div>
  )
}
export default DrawerToggleBtn;