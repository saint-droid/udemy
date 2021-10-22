import React from 'react'
import styled from 'styled-components';



const Container = styled.div`
margin: 20px;

`
const H1 = styled.h1`
font-size:24px;
font-weight:800;
font-family:arial;

`
const H5 = styled.a`
font-size:24px;
font-weight:800;
padding:20px 0;
font-family:arial;
color:blue;
cursor:pointer;
text-decoration:none;
`
const RecomendHead = () => {
    return (
        <Container>
            <H1>Topics recomended for you</H1>
            
        </Container>
    )
}

export default RecomendHead
