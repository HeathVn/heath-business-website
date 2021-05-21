import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll'


export const Nav = styled.nav`

/* #07addb */

    background:linear-gradient(#43cea2 , #185a9d) ;
    height: 80px;
    display:flex;
    /* flex-direction: column; */
    justify-content: center; 
    align-items: center; 
    font-size: 1 rem;
    position: relative;
    /* width:200vh; */
    z-index: 20;
    margin-bottom: 0;
    


`;

export const NavbarContainer = styled.div`
    display:block;
    justify-content: space-between;  
    height: 80px;
    z-index: 1;
    
    padding: 0 24px;
    max-width:1100px;
    width:100vh;

`;
export const NavLogo = styled(LinkR)`
    color: #fff;
    
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 0px;
    font-weight: bold;
    text-decoration: none;
    padding-left: 20px;
    padding-top: 15px;
    margin-left:360px;
   
    
`

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
        
    }
`
export const MobileIcon2 = styled.div`
    
color: #fff;
font-size: 2rem;
cursor: pointer;
position: absolute;
top:-5;
right:0;
transform: translate(-80%, 44%);



    @media screen and (max-width: 768px){
        display:block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-80%, 48%);
        font-size: 2rem;
        cursor: pointer;
        color: #fff;
        margin-right:60px
        
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 590px;
    position: absolute;
    right: 40px;

    @media screen and (max-width: 768px){
        display:none;
    }

`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    margin-right: 60px;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

/* Adds highlight under the section user is
 currently on when scrolling */

    &.active {
        border-bottom: 3px solid #fff;
    }

`