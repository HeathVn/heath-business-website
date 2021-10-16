import React from 'react';
import {FaBars} from 'react-icons/fa'
import {GiShop} from 'react-icons/gi'
import {DiCodeigniter} from 'react-icons/di'
import {Nav, NavbarContainer, NavLogo, MobileIcon, MobileIcon2,NavMenu, NavItem,
NavLinks, NavLinks2} from './NavbarElements';
import {motion} from 'framer-motion';


import "./styles.css";

const Navbar = () => {
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
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    <MobileIcon2>
                        <GiShop id="shop"/>
                    </MobileIcon2>
                    <NavMenu className="item1">
                        <NavItem >
                            <NavLinks2 to="about">About</NavLinks2>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about'>Contact</NavLinks>
                        </NavItem>
                        <NavItem>
                            
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
