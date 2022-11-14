import React from 'react'
import "./Footer.css"
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import Linkedin from "../../assets/linkedin.png"
import logo from "../../assets/logo.png"
    


const Footer = () => {
  return (
    <div className="footer-container" id="footer">
        <hr />
        <div className="footer">
            <div className="social-links">
                <img src={Github} alt=""/>
                <img src={Instagram} alt="" />
                <img src={Linkedin} alt="" />
            </div>
            <div className="logo-f">
                <img src={logo} alt="" />
            </div>
           
        </div>

        <div className="blur footer-blur-1"></div>
        <div className="blur footer-blur-2"></div>
       

    </div>
  )
}

export default Footer