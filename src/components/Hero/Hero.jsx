import React from 'react'
import  "./Hero.css"
import Header from "../Header/Header"
import hero_image  from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"
import {motion} from "framer-motion"
import NumberCounter from "number-counter"

const Hero = () => {
     const transition = {type: "spring", duration: 3}
     const mobile = window.innerWidth <= 768 ? true : false
  return (
   <div className="hero" id="hero">
          <div className="blur hero-blur"></div>
          <div className="left-h">
               <Header/>
               {/*********THE BEST AD*********/}
               <div className='the-best-ad'>
                    <motion.div
                    initial={{left: mobile ? "145px" : "190px"}}
                    whileInView={{left: "8px"}}
                    transition={{...transition, type: "tween"}}
                    >

                    </motion.div>

                    
                    <span>The Best Fitness in The Town</span>
               </div>
               {/*******HERO HEADING *******/}
               <div className="hero-text">
                    <div>
                         <span className="stroke-text">Shape </span>
                         <span>Your</span>
                    </div>
                    <div>
                         <span>Ideal Body</span>
                    </div>
                    <div>
                         <span>
                              In here we will help you to shape and build your ideal body and live up your life to fullest
                         </span>
                   
                    </div>
               </div>
               {/********* EXPERIENCE FIGURES***********/}
               <div className="figures">
                    <div>
                         <span>
                              <NumberCounter  end={140} start={100} delay="4" preFix="+"/>
                         </span> 
                         <span>expert coaches</span>
                    </div>
                    <div>
                         <span>
                              <NumberCounter  end={978} start={800} delay="4" preFix="+"/>
                         </span>
                         <span>member joined</span>
                    </div>
                    <div>
                         <span>
                              <NumberCounter  end={50} start={0} delay="4" preFix="+"/>
                         </span>
                         <span>fitness programs</span>
                    </div>
               </div>
               {/*******HERO BUTTONS********* */}
               <div className="hero-buttons">
                    <button className="hero-button btn">Get Started</button>
                    <button className="hero-button btn">Learn More</button>
               </div>
          
         
          </div>
          <div className="right-h">
             <button className="btn">Join Now</button>
             <motion.div className="heart-rate"
             initial={{right: "-1rem"}}
             whileInView={{right: "4rem"}}
             transition={transition}
             >
                    <img src={heart} alt="heart" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
             
             </motion.div>

               {/*******HERO IMAGE***********/}
               <img src={hero_image} alt="" className="hero-image" />
               <motion.img 
               initial={{right: "11rem"}}
               whileInView={{right: "20rem"}}
               transition={transition}
               src={hero_image_back} alt="" className="hero-image-back" />
               
               <motion.div className="calories"
               initial={{right: "37rem"}}
               whileInView={{right: "28rem"}}
               transition={transition}
               >
                    <img src={calories} alt="calories"/>
                    <div>
                         <span>Calories Burned</span><span>225 Kcal</span>
                    </div>
                    
               </motion.div>
               
          </div>

      </div>
  )
}

export default Hero