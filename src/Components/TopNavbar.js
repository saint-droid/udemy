import React from 'react'
import styled from 'styled-components';

const Container= styled.div`
background-color:moccasin; 
height:60px;
padding:15px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const H1 =styled.h1`
font-size:18px;
font-weight:700;
`
const Small =styled.small`
font-size:14px;
font-weight:400;
`
const H3 =styled.h3`
font-size:16px;
font-weight:600;
`
const TopNavbar = () => {
    return (
        <Container>
            <H1>Last day to save|<Small> Future-ready courses start at $11.99.</Small></H1>
            <H3>Ends in 9h 36m 4s.</H3>
        </Container>
    )
}

export default TopNavbar
