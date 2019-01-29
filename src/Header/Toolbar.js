import React from 'react'
import './Toolbar.css';
import DrawerToggleBtn from './DrawerToggleBtn'

 const Toolbar=(props) => {
  return (
    <div>
      <header className="toolbar">
          <nav className="toolbar_navigation">
              <div>
                  <DrawerToggleBtn/>
              </div>
              <div className="toolbar_logo"><a href="">The Logo</a></div>
              <div className="spacer"/>
              <div className="toolbar_navigation-items">
                  <ul>
                      <li><a href="/"></a>Home</li>
                      <li><a href="/"></a>Cart</li>
                  </ul>
              </div>
          </nav>
      </header>
    </div>
  )
}
export default Toolbar;