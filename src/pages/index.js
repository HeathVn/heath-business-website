import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import KommunicateChat from '../chat'

const Home = () => {
    

    return (
        <>
           <Navbar/>
           <HeroSection/> 
           
           <Banner/>
           <About />
           
           <Footer/> 

           <KommunicateChat/>
           

           
            
        </>
    )
}

export default Home;
