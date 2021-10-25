//import logo from './logo.svg';
//import './App.css';
import { Star, StarHalf } from '@material-ui/icons';
import styled from 'styled-components';
import { products } from '../data';

const Container= styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
`
const Section = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%; 
height:100%;
padding:10px;
flex-wrap:wrap;

`
const H1 = styled.h1`
font-weight:700;
font-size:15px;
font-family:arial,sans-serif;
`
const Main = styled.div`
display:flex;
align-items:center;
flex-direction:column;
justify-content:space-between;
width:250px;
padding:6px;
flex-wrap:wrap;
background-color:white;
margin:2px;
border-radius:6px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
cursor:pointer;
`
const ImgCont = styled.div`
display:flex;
align-items:center;

`
const Img = styled.img`
width:100%;
height:100%;
`
const InnerSection = styled.div`
display:flex;
align-items:flex-start;

justify-content:flex-start;
width:100%;
padding:5px;
`
const Name = styled.h3`
font-weight:700;
font-size:15px;
font-family:arial,sans-serif;
`
const Desc = styled.h5`
font-weight:500;
font-size:12px;
font-family:arial,sans-serif;
`
const Button = styled.button`
font-weight:700;
font-size:11px;
font-family:arial,sans-serif;
color:black;
background-color:moccasin;
border:none;
padding:5px 10px;
border-radius:1px;
cursor:pointer;

`
const Wishlist = styled.button`
font-weight:700;
font-size:14px;
font-family:arial,sans-serif;
color:red;
border-color:red;
background-color:none;
padding:10px 18px;
border-radius:1px;
cursor:pointer;
`
const Del= styled.del`
padding-left:5px;
`
const Products = ()=> {
  return (
    <Container>
      <Section>
         
        {products.map((item)=>(

      
        <Main>
          <ImgCont>
          <Img src={item.img}/>
          </ImgCont>
          <InnerSection>
          <Name>{item.name}</Name>
         
          </InnerSection>
          <InnerSection>
          <Desc>{item.category}</Desc>
          {/*<Button>Buy</Button>
          <Wishlist>Wishlist</Wishlist>*/}
          </InnerSection>
          <InnerSection>
              {item.likes}
              <Star fontSize="10px"/>
              <Star/>
              <Star/>
              <Star/>
              <StarHalf/>
             ({item.number})
          </InnerSection>
          <InnerSection>
             $11.19  <Del>$99</Del>
          </InnerSection>
          <InnerSection>
          <Button>Best seller</Button>
          </InnerSection>
        </Main>
          ))}
      </Section>
    </Container>
  );
}

export default Products;
