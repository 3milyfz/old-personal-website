import React, { useState } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Torus, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  position: relative;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 80px;
  font-weight: bold;
  position: absolute;
  text-align: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    font-size: 50px;
    justify-content: center;
  }
`;


const Works = () => {
  const [work, setWork] = useState("Web Design");

  return (
    <Section>
      <Container>
        <Canvas>
            <OrbitControls enableZoom={false} enableRotate={false}/>
            <ambientLight intensity={0.3}/>
            <directionalLight position={[3,2,1]}/>
             <Torus args={[2, 0.7, 16, 100]}>
            <MeshDistortMaterial color="#62cbd3" attach="material" distort={0.2} speed={2}/> 
            </Torus>
          </Canvas>
          <Title>Projects coming soon...</Title>
      </Container>
    </Section>
  );
};

export default Works;