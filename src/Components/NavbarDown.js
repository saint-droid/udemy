import React from 'react'
import styled from 'styled-components';
//import "./style.css";
import {navigation, navigationList} from '../data'
const Dropdown = styled.li`
display:flex;
align-items: flex-start;
flex-direction:row;
position:absolute;
background-color:black;
color:white;
padding:10px 20px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
height:auto;
width:auto;
z-index:3;
opacity:0;
`
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
padding:10px 20px;
cursor:pointer;
`

const DropdownHeader = styled.a`
color:black;
text-decoration:none;
padding:10px 15px;
font-weight:300;
cursor:pointer;
position:relative;
&:hover ${Dropdown}{
    opacity:1;
    }

`;

const DropdownItem = styled.ul`
padding:10px 20px;


`
const NavbarDown = () => {
    return (
        <Container>
            {navigation.map((item)=>(

           
            <NavbarDownItem>{item.name}</NavbarDownItem>
            
            ))}
               {/* <Dropdown>
               <DropdownHeader>{item.name}</DropdownHeader>
                    <DropdownItem>Business</DropdownItem>
                    <DropdownItem>Finance & accounting</DropdownItem>
                    <DropdownItem>It & software</DropdownItem>
                    <DropdownItem>Office productivity</DropdownItem>
                    <DropdownItem>Personal development</DropdownItem>
                    <DropdownItem>Design</DropdownItem>
                    <DropdownItem>Marketing</DropdownItem>
                    <DropdownItem>Health & fitness</DropdownItem>
                    <DropdownItem>Music</DropdownItem>
                    
               </Dropdown>*/}
           
            
          
           
        </Container>
    )
}

export default NavbarDown