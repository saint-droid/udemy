import React from 'react'
import styled from 'styled-components';



const Container = styled.div`
background-color:black;
margin:40px 20px;
padding:10px;
display:flex;
align-items:center;
justify-content:space-between;
flex-direction:row;
`

const Left = styled.div`


`

const Right = styled.div`


`

const Button = styled.button`
background-color:white;
color:black;
padding:10px 12px;
border:none;
margin-right:10px;
transition:all 0.5s ease;

&:hover{
    background-color:black;
    color:white;
    border:1px solid white;
}
`

const Dismiss = styled.button`
background-color:black;
color:white;
padding:10px 12px;
border:1px solid white;
margin-right:10px;
&:hover{
    background-color:white;
    color:black;
    border:none;
}

`
const H1 = styled.h1`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
color:white;
font-size:16px;
font-weight:600;

`
const Strong = styled.h4`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
color:white;
font-size:16px;


`
const Anouncement = () => {
    return (
        <Container>
            <Left>
                <H1>Training 5 or more people? Get your team access to Udemy's top 6,000+ courses</H1>
            </Left>
            <Right>
                <Button>Get udemy business</Button>
                <Dismiss>Dismiss</Dismiss>
            </Right>
        </Container>
    )
}

export default Anouncement
