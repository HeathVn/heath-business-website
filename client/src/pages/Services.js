import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import KommunicateChat from '../chat'
import Products from '../../src/components/Products/Products'

import  '../../src/pages/Services.css'

const Services = () => {
    

    return (
        <>
           <Navbar/>
           <div className= 'main-body'>
               <h1 className = 'title'>Service Packages</h1>
                 <Products/>

             </div>
           
           <Footer /> 

           <KommunicateChat/>
           

           
            
        </>
    )
}

export default Services;
