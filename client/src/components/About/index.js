import React from 'react'
/* import Poster from './images/bg4.jpg' */
import Poster1 from './images/profileMe.jpeg'
import {HeroContainer, HeroBg, ImageLeft} from './About';
import {Nav} from '../Navbar/NavbarElements'
import './About.css';
import {motion} from 'framer-motion'
import { bounceAnimation, transition } from '../../animations';
import {useLocation} from 'react-router-dom';

const About = () => {
   let location = useLocation();

    return (
  
        
       <div className="aboutcon">
           <div className="photobox" styles={{float:'left'}}>
                <motion.img location ={location} key={location.pathname} 
                whileHover={{scale:1.1}} initial='out' animate='in' exit='out' variants={bounceAnimation} 
                alt="" id = "about" className="photo" src={Poster1} style={{ height:'40vh', width:'30vh'}}/> 
           </div >
             <div className ="info" styles={{float:'right'}}>
                 
             </div>
       </div> 


    )
}

export default About;
