import { Text } from "@react-three/drei";
import { useState } from "react";


export const BoxWithNumber = ({ position, number }: {position: [number, number, number], number: number}) => {

    const [hovered, setHovered] = useState(false);

      const handlePointerOver = () => {
          setHovered(true)
      }

      const handlePointerOut = () => {
        setHovered(false);
      }
    return (
     
        <mesh position={position} 
        onPointerOver={handlePointerOver}
        onPointerOut = {handlePointerOut}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={hovered ? 'lightgray' : 'white'} />
          <Text
            position={[0, 0, 0.6]}
            fontSize={0.5}
            color="#191919"
            anchorX="center"
            anchorY="middle"
            
          >
            { number + 1}
          </Text>
        </mesh>
 
    );
  };