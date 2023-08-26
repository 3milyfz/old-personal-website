import React, { Suspense } from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import Navbar from "./NavBar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 30px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: #636363;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
font-weight: 500;
width: 100px;
padding: 10px;
background-color: #9b7f9c;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
`;

const P = styled.p`
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`

const Right = styled.div`
  flex: 1;
  position: relative;
  align-items: center;
  
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 750px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

<Typewriter
  options={{
    loop: true,
  }}
/>

const Home = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>
            <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello there!")
                .pauseFor(1000)
                .deleteAll()
                .typeString("I'm glad you made it.")
                .pauseFor(1000)
                .start()
            }}
            options={{
              loop: true,
            }}
            />
          </Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Welcome to my website</Subtitle>
          </WhatWeDo>
          <Desc>
          I'm Emily, a Computer Science student on a journey to explore and innovate in the world of technology.
          </Desc>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[-5, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.6}>
                <MeshDistortMaterial
                  color="#987bfd"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="./img/emily.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Home;