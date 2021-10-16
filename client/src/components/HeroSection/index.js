import React from 'react'
import Video from './comp1.mp4'
/* import Poster from './images/bg7.jpg' */
import {HeroContainer} from './HeroElements';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <HeroContainer className= 'hero-container'>
               
              <video src = {Video} autoPlay loop muted />


             {/* <HeroBg style={{ backgroundImage: `url(${Poster})` }}>
               <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>  */}
        </HeroContainer>
    )
}

export default HeroSection;
