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
const TopCourses = () => {
    return (
        <Container>
            <H1>Top courses in <H5>web Development</H5></H1>
            
        </Container>
    )
}

export default TopCourses
