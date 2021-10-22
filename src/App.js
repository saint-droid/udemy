import Hero from "./Components/Hero";
//import Navbar from "./Components/Navbar";
import Products from "./Components/Products"
import styled from 'styled-components';
import MainNavbar from "./Components/MainNavbar";
import NavbarDown from "./Components/NavbarDown";
import TopNavbar from "./Components/TopNavbar";
import Anouncement from "./Components/Anouncement";
import LearnMoreBar from "./Components/LearnMoreBar";
import TopCourses from "./Components/TopCourses";
import TopProducts from "./Components/TopProducts";
import Footer from "./Components/Footer";

const Container = styled.div`


`
const ContainerInnner = styled.div`
padding:0 150px;

`
function App() {
  return (
    <Container>
      <TopNavbar/>
      <MainNavbar/>
      <NavbarDown/>
      <ContainerInnner>
      <Hero/>
      <Anouncement/>
      <LearnMoreBar/>
      <Products/>
      <TopCourses/>
      <TopProducts/>
      <LearnMoreBar/>
      <Products/>
      <TopCourses/>
      <TopProducts/>
      </ContainerInnner>
      <Footer/>
    </Container>
  );
}

export default App;
