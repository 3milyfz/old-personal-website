import React from 'react'
import { styled } from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
display: flex;
align-items: center;
gap: 50px;
padding: 10px;
`;

const Icons = styled.div`
display: flex;
gap: 20px;
padding: 20px;
`;

const Logo = styled.img`
height: 80px;


@media only screen and (max-width: 768px) {
    display: none;
  }

`;

const List = styled.ul`
display: flex;
align-items: center;
gap: 40px;
list-style: none;

@media only screen and (max-width: 768px) {
    gap: 10px;
  }
`;

const Button = styled.button`
width: 90px;
padding: 10px;
background-color: #1c0715;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
`;

const Img=styled.img`
  width: 40px;
  cursor: pointer;
`;

const NavBar = () => {
  return (
    <Section>
        <Container>
            <Links>
              <Logo src="./img/logo3.png"/>
              <List>
                <Img src="./img/email.png" onClick={()=> window.location='mailto:emilyfaithzhou@mail.utoronto.ca'}/>
                <Img src="./img/linkedin.png" onClick={()=>window.open('https://www.linkedin.com/in/emily-fz/')}/>
                <Img src="./img/github.png" onClick={()=>window.open('https://github.com/3m1ly03')}/>
                <Img src="./img/instagram.png" onClick={()=>window.open('https://www.instagram.com/emilyyzhou/')}/>
              </List>
            </Links>
            <Icons>
              <Button onClick={()=>window.open('./Emily_Zhou_Resume.pdf')}>Resume</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default NavBar
