//import { Searn } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { AccountCircle, FavoriteBorderOutlined, Notifications, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';


const Container = styled.nav`
display:flex;
align-items:center;
flex-direction:row;
justify-content:space-between;
background-color:white;
height:70px;

padding: 0 20px;

`
const Left = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-direction:row;


`
const Logo = styled.span`
padding:0px 20px;
font-weight:900;
font-size:40px;
cursor:pointer;

`
const LeftItem = styled.div`
cursor:pointer;
font-weight:400;
font-size:14px;
font-family:arial,sans-serif;

`

const DropdownHeader = styled.a`
font-weight:400;
font-size:14px;
font-family:arial,sans-serif;
padding:0 8px;
`
const Dropdown = styled.li`
display:flex;
align-items: center;
flex-direction:column;
position:absolute;
background-color:yellow;
padding:20px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
height:300px;
`
const DropdownItem = styled.ul`

z-index:1;
`
const Center = styled.div`


`
const InputCont = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
flex-direction:row;
width:900px;
height:40px;
padding:0 20px;
border:1px solid black;
flex:1;
border-radius:50px;
`
const Input = styled.input`
border:none;
padding-right:10px;
outline:none;
flex:3;
font-weight:300;
font-size:13px;
padding:0 20px;
font-family:arial,sans-serif;
`
const Search = styled.button`
border:none;
background-color:white;
font-weight:600;
font-size:14px;
font-family:arial,sans-serif;
cursor:pointer;
`
const Right = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-direction:row;

`
const RightItem = styled.div`
font-weight:400;
font-size:14px;
font-family:arial,sans-serif;
padding:0 8px;
cursor:pointer;

`
const MainNavbar = () => {
    return (
        <Container>
            <Left>
                <LeftItem>
                <Logo>Jameshop</Logo>
                </LeftItem>
                <LeftItem>
                    Categories
                    {/*<DropdownHeader>Categories</DropdownHeader>
                    <Dropdown>
                        <DropdownItem>Development</DropdownItem>
                        <DropdownItem>Development</DropdownItem>
                        <DropdownItem>Development</DropdownItem>
                        <DropdownItem>Development</DropdownItem>
                    </Dropdown>*/}
                </LeftItem>
            </Left>
            <Center>
                <InputCont>
                <Search><SearchOutlined/></Search>
                    <Input placeholder="search for anything"/>
                    
                    </InputCont>
            </Center>
            <Right>
                <RightItem>
                Jameshop business
                    
                </RightItem>
                <RightItem>Teach on Jameshop</RightItem>
                <RightItem>My Learning</RightItem>
                <RightItem><FavoriteBorderOutlined/></RightItem>
                <RightItem>
                    <Badge badgeContent={1} color="primary">
                            <ShoppingCartOutlined/>
                    </Badge>
                </RightItem>
                <RightItem><Notifications/>  </RightItem>
                <RightItem><AccountCircle/>  </RightItem>
            </Right>
        </Container>
    )
}

export default MainNavbar
