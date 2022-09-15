import React from 'react'
import "./Footer.css"
import images from "./images/Frame_19.png"

const Footer = () => {
  return (
    <>
    <section className='Notification'>
        <div className="card">
    <div>
        <img src={images} alt="" className='contact'/>
      </div>
        </div>
        
    <div className="footer">
        <span>&copy; Copyrights 2021-22</span>
    </div>
      </section>
    </>
  )
}

export default Footer