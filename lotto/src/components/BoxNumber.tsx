import { Text } from "@react-three/drei";


export const BoxWithNumber = ({ position, number }: {position: [number, number, number], number: number}) => {
    return (
     
        <mesh position={position}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="skyblue" />
          <Text
            position={[0, 0, 0.6]}
            fontSize={0.5}
            color="#fff"
            anchorX="center"
            anchorY="middle"
          >
            { number + 1}
          </Text>
        </mesh>
 
    );
  };