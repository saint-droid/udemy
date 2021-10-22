import React from 'react'
import styled from 'styled-components';



const Container = styled.div`
margin:0 20px;

`
const H1 = styled.h1`
font-size:27px;
font-weight:700;
font-family:arial;

`
const H5 = styled.h5`
font-size:20px;
font-weight:600;
padding:20px 0;
font-family:arial;

`
const LearnMoreBar = () => {
    return (
        <Container>
            <H1>What to learn next</H1>
            <H5>Students are viewing</H5>
        </Container>
    )
}

export default LearnMoreBar
