import Home from "./components/Home"
import Who from "./components/Who"
import Works from "./components/Works"
import Contact from "./components/Contact"
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: #2a0a23;
  background: url(./img/bg2.png);
  &::-webkit-scrollbar{
    display: none;
  }
  
`;

function App() {
  return (
    <Container>
      <Home />
      <Who />
      <Works/>
      <Contact />
    </Container>
  );
}

export default App;
