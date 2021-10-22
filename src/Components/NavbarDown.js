import React from 'react'
import styled from 'styled-components';
import "./style.css";


const Container= styled.div`
background-color:white; 
height:40px;
border-top:1px solid beige;
display:flex;
align-items:center;
justify-content:center;

`
const NavbarDownItem = styled.a`
color:black;
text-decoration:none;
padding:10px 15px;
font-weight:300;
cursor:pointer;
`

const NavbarDown = () => {
    return (
        <Container>
            <NavbarDownItem>Development</NavbarDownItem>
           <NavbarDownItem>Business</NavbarDownItem>
           <NavbarDownItem>Finance & accounting</NavbarDownItem>
           <NavbarDownItem>It & software</NavbarDownItem>
           <NavbarDownItem>Office productivity</NavbarDownItem>
           <NavbarDownItem>Personal development</NavbarDownItem>
           <NavbarDownItem>Design</NavbarDownItem>
           <NavbarDownItem>Marketing</NavbarDownItem>
           <NavbarDownItem>Health & fitness</NavbarDownItem>
           <NavbarDownItem>Music</NavbarDownItem>
        </Container>
    )
}

export default NavbarDown
