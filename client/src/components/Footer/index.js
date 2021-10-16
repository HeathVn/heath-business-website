import React from 'react';
import {DiCodeigniter} from 'react-icons/di'
import {Nav, NavbarContainer, NavLogo} from './Footer';
import {motion} from 'framer-motion';

import "./styles.css";

const Footer = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo 
                    
                    className="logo" to='/'><motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3 }}
                    
                    
                    
                    >HvLegacyDesigns<DiCodeigniter id="flame"/></motion.h3>

                    
                        
                    
                    
                    </NavLogo>
                    
                    
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Footer;
