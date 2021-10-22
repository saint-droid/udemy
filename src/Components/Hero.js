import React from 'react'
import styled from 'styled-components';
import hero from "../assets/hero.jpg"

const Container=styled.div`

width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
margin-top:10px;
position:relative;
`
const Img =styled.img`
width:100%;
`
const InnerCont =styled.div`
position:absolute;
top:0;
left:0;
margin:20px 30px ;
background-color:white;
width:300px;
padding:20px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const H1 =styled.h1`
font-size:30px;
font-weight:800;
`
const P =styled.p`

`
const Hero = () => {
    return (
        <Container>
           <Img src={hero}/> 
           <InnerCont>
               <H1>Last day to save!</H1>
               <P>Courses designed to help you reach your goals start at just $11.99 — sale ends October 22.</P>
           </InnerCont>
        </Container>
    )
}

export default Hero
