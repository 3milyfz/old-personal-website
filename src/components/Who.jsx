import React from 'react'
import { styled } from 'styled-components'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cube from './Cube';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: 150vh;
  }    
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 30px;

  @media only screen and (max-width: 768px) {
      align-items: center;
      text-align: center;
      padding: 20px;
    }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 45px;
  }
`;

const Line = styled.img`
  height: 5px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Subtitle = styled.h2`
  color: #c569da;
  @media only screen and (max-width: 768px) {
      text-align: center;
    }
`;

const Desc = styled.p`
  font-size: 24px;
  color: #636363;
  @media only screen and (max-width: 768px) {
      padding: 10px;
      text-align: left;
      font-size: 20px;
    }
`;

const Right = styled.div`
flex: 1;

@media only screen and (max-width: 768px) {
    display: none;
  }

`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>A little bit about me
          </Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Curious. Resilient. Innovative.</Subtitle>
          </WhatWeDo>
          <Desc> 👩🏻‍🎓  I'm pursuing a specialization in computer science and a minor in statistics at the University of Toronto. I expect to graduate in December of 2025!</Desc>
          <Desc> 🔍  I'm a curious explorer who is passionate about pushing the boundaries of innovation. I'm always ready to embrace the unknown.</Desc>
          <Desc> 👩🏻‍💻  From crafting elegant algorithms to developing user-friendly applications, I'm committed to continuously honing my skills and expanding my knowledge.</Desc>
          <Desc> 🍥 In my free time, you can find me reading manga, watching anime, or scouting out the best restaurants in the city!</Desc>
        </Left>
        <Right>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={2.5} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Right>
      </Container>
    </Section>
  )
}

export default Who;
