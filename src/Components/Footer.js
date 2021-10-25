import React from 'react'
import styled from 'styled-components';
import { FaApple, FaGoogle, FaWordpress, FaFacebookSquare } from 'react-icons/fa';
//import{LanguageIcon} from '@material-ui/icons'


const Container= styled.div`
padding:20px;
background-color:#000;
color:white;

`
const Option= styled.div`
display:flex;
align-items:center;
flex-direction:row;
justify-content:space-between;
padding:20px;
border-bottom:1px solid gray;
&:last-child{
    border-bottom:none;
}

`
const Left= styled.div`
display:flex;

flex-direction:column;


`
const H1= styled.h1`
font-size:20px;
font-weight:700;
color:white

`
const Span= styled.span`
font-size:13px;
font-weight:450;


`
const Right= styled.div`


`
const Teach = styled.button`
background-color:black;
color:white;
padding:10px 12px;
border:1px solid white;
margin-right:10px;


`
const FooterOption= styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;

`
const FooterMenu= styled.a`
text-decoration:none;
color:white;
cursor:pointer;
padding:12px 10px;

`
const FooterLeft= styled.div`
display:flex;
align-items:center;
justify-content:space-between;
flex-direction:row;
flex:2;
`
const FooterRight= styled.div`
flex:1;
display:flex;
align-items:flex-end;
justify-content:flex-end;


`
const Logo = styled.span`
padding:0px 20px;
font-weight:900;
font-size:40px;
cursor:pointer;

`


const Footer = () => {
    return (
        <Container>
            <Option>
                <Left>
                    <H1>Teach the world online</H1>
                    <Span>Create an online video course, reach students across the globe, and earn money</Span>
                </Left>
                <Right>
                <Teach>Teach on Jameshop</Teach> 
                </Right>
            </Option>
            <Option>
                <Left>
                    <H1>Top companies choose Udemy Business to build in-demand career skills.</H1>
                    
                </Left>
                <Right>
                 <FaApple size="30"/>
                 <FaGoogle size="30"/>
                 <FaFacebookSquare size="30"/>
                 <FaWordpress size="30" />
                </Right>
            </Option>
            <Option>
                <FooterLeft>
                 
                  <FooterOption>
                        <FooterMenu>
                            Udemy Business
                        </FooterMenu>
                        <FooterMenu>
                            Teach on Jameshop
                        </FooterMenu>
                        <FooterMenu>
                            Get the app
                        </FooterMenu>
                        <FooterMenu>
                           About us
                        </FooterMenu>
                        <FooterMenu>
                            Contact us
                        </FooterMenu>
                  </FooterOption>
                  <FooterOption>
                        <FooterMenu>
                            Careers
                        </FooterMenu>
                        <FooterMenu>
                           Blog
                        </FooterMenu>
                        <FooterMenu>
                            Help and support
                        </FooterMenu>
                        <FooterMenu>
                            Affliate
                        </FooterMenu>
                        
                  </FooterOption>
                  <FooterOption>
                        <FooterMenu>
                           Terms
                        </FooterMenu>
                        <FooterMenu>
                            Privacy policy
                        </FooterMenu>
                        <FooterMenu>
                            Sitemaps
                        </FooterMenu>
                        
                  </FooterOption>
                  
                </FooterLeft>
                <FooterRight>
                <Teach>  English</Teach>
                </FooterRight>
            </Option>
            <Option>
                <Left>
                <Logo>Jameshop</Logo>
                </Left>
                <Right>
                    <Span>&copy; copyright 2021 Jameshop inc</Span>
                </Right>
            </Option>
        </Container>
    )
}

export default Footer
