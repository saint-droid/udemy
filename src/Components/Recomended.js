import React from 'react'
import styled from 'styled-components';
import { Recomend } from '../data';


const Container=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
flex-wrap:wrap;

`
const Option=styled.button`
background-color:none;
color:black;
width:250px;
font-weight:700;
padding:14px 16px;
border:2px solid black;
margin:12px 10px 12px 0;
cursor:pointer;
&:hover{
    background-color:black;
    color:white; 
    border:none;
}

`

const Recomended = () => {
    return (
        <Container>
            {Recomend.map((item) =>(
                <Option>
                    {item.name}
                </Option>
            ))}
            
        </Container>
    )
}

export default Recomended
