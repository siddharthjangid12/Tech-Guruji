import React from 'react'
import "./Navbar.css"
import Menu from './Menu'

const Navbar = () => {
  return (
    <div>
        <header className="left">
        <h4>TECH<span>GURUJI</span></h4>
        </header>

        <Menu />
    </div>
  )
}

export default Navbar