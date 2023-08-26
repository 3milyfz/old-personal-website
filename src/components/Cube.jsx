import React, {useRef} from 'react';
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import {useFrame} from "@react-three/fiber"


export const Cube = () => {
    const textRef = useRef()
    useFrame(state=> (textRef.current.position.x = Math.sin(state.clock.elapsedTime)*2))
    return (
        <mesh>
            <boxGeometry args={[1.2,1.2,1.2]}/>
            <meshStandardMaterial>
                <RenderTexture attach="map">
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <color attach="background" args={["#6f88fa"]} />
                    <Text ref={textRef} fontSize={3} color="#555">
                        :)
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    )
}

export default Cube;


