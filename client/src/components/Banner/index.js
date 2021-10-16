import React from 'react'
/* import Poster from './images/bg4.jpg' */
import Poster1 from './images/profileMe.jpeg'
import {HeroContainer, HeroBg, ImageLeft} from './Banner';
import {Nav} from '../Navbar/NavbarElements'
import './Banner.css';
import {motion} from 'framer-motion'
import { bounceAnimation, transition } from '../../animations';
import {useLocation} from 'react-router-dom';

const About = () => {
   let location = useLocation();

    return (
  
        <HeroContainer className= 'hero-container'>
               
               <HeroBg >
                   
             
                  
               </HeroBg>  
               
        </HeroContainer>
        
        
    )
}

export default About;
