import { useRef, useState } from 'react';
import React from 'react';
import { styled } from 'styled-components'
import emailjs from '@emailjs/browser';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;

  @media only screen and (max-width: 768px) {
    height: 100vh;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 400;
`;

const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;

`;

const Button = styled.button`
  background-color: #1c0715;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Left = styled.div`
flex: 1;
position: relative;
align-items: center;

@media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Img = styled.img`
height: 700px;
width: 650px;
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
  to{
    transform: translateY(20px);
  }
}
`;

const Contact = () => {
  const ref = useRef()
  const [success, setSuccess] = useState(null)

  const handleSubmit =e=> {
    e.preventDefault()

    emailjs.sendForm('service_6kje0ys', 'template_lkd242o', ref.current, 'NLvAY832C2_H3b0FN')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
      }, (error) => {
        console.log(error.text);
        setSuccess(false);
      }
      );
  }

  return (
    <Section>
      <Container>
        <Left>
        <Canvas>
            <OrbitControls enableZoom={false} enableRotate={false}/>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[3,2,1]}/>
            <Sphere args={[1,100,200]} scale={2.3}>
            <MeshDistortMaterial color="#76b1ff" attach="material" distort={0.5} speed={2}/> 
            </Sphere>
          </Canvas>
         <Img src="./img/emily2.png" />
        </Left>
        <Right>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea placeholder="Write your message" name="message" rows={10} />
            <Button type="submit">Send</Button>
            {success && "Your message has been sent. I'll get back to you soon!"}
          </Form>
        </Right>
      </Container>
    </Section>
  )
}

export default Contact;