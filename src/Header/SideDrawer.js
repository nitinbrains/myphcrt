import React from 'react'
import './SideDrawer.css'
 const SideDrawer=() => {
  return (
    <div>
      <nav className="sideDrawer">
          <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Cart</a></li>

          </ul>
      </nav>
    </div>
  )
}
export default SideDrawer;