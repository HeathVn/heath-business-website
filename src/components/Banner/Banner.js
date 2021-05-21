import styled from 'styled-components';


export const HeroContainer = styled.div`
   
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 20 ;
    height:40vh;
    position: relative;
    z-index:-10;
    transform-origin: right ;
    transform: skewY(10deg);
    border-bottom:45px solid rgba(255, 208, 66,.95);
    border-top:45px solid rgba(0, 0, 0,.25);
    
    
`

export const HeroBg = styled.div`
    width:100%;
    height:100%;    
    -o-object-fit: cover;
    object-fit: cover;
    justifyContent: center;
    background: linear-gradient(#2193b0 , #6dd5ed);
    
    color: #fff;
    
    z-index:-10;
    height: 50vh;
    opacity: 10; 
    
    
`

export const VideoBg = styled.div`
    
    width:100%;
    height:100%;    
    -o-object-fit: cover;
    object-fit: cover;
    
    

`

export const ImageLeft = styled.div`
    
    width:50vh;
    height:100%;    
    -o-object-fit: cover;
    object-fit: cover;
    
    
    

`