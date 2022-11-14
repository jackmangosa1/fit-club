import React, { useState } from 'react'
import "./Header.css"
import logo from "../../assets/logo.png"
import Bars from "../../assets/bars.png"
import {Link} from "react-scroll"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'



const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false
  const[menuOpened, setMenuOpened] = useState(false)
  return (
    <div className="header">
        <img src={logo} alt="logo" className='logo' />

        {menuOpened === false && mobile
        ? <div 
            style={{
              backgroundColor: "var(--appColor)",
              padding: "0.5rem",
              borderRadius: "5px",
            }}
            
            onClick={()=>setMenuOpened(true)}
            >

            <img src={Bars} alt=""
               style={{
                  width: "1.5rem" , 
                  height: "1.5rem",
              }}
            />
           
          </div>
        :  <ul className='header-menu' style={{position: "relative"}}>
               
              {menuOpened && mobile 
              && <FontAwesomeIcon icon={faXmark} 
                onClick={() => setMenuOpened(false)}
                style={{
                  position: "absolute",
                  width: "1.5rem" , 
                  height: "1.5rem",
                  marginLeft:" 5rem",
                  marginTop: " -1.4rem",
                  marginBottom: "1rem",
                  backgroundColor: "rgba(225, 255, 255, 0.2)",
                  padding: "0.2rem",
                  borderRadius: "5px",
              }}/>}

              <li>
                <Link 
                  to="hero"
                  spy={true}
                  smooth={true}
                  onClick={() => setMenuOpened(false)}
                >
                    Home
                </Link>
              </li>

              <li>
                <Link
                  to="programs"
                  spy={true}
                  smooth={true}
                  onClick={() => setMenuOpened(false)}
                >
                  Programs
                </Link>
              </li>

              <li>
                <Link
                  to="reasons"
                  spy={true}
                  smooth={true}
                  onClick={() => setMenuOpened(false)}
                >
                  Why us
                </Link>
              </li>

              <li>
                <Link
                   to="plans"
                   spy={true}
                   smooth={true}
                   onClick={() => setMenuOpened(false)}
                >
                  Plans
                </Link>
              </li>

              <li>
                <Link
                   to="testimonials"
                   spy={true}
                   smooth={true}
                   onClick={() => setMenuOpened(false)}

                >
                  Testimonials
                </Link>
             
              </li>
          </ul>
      }
       
    </div>
  )
}

export default Header