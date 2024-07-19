import  { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/three";
import { Text } from "@react-three/drei";

type BoxWithNumberProps = {
  position: [number, number, number];
  number: number;
  onClick: (num: number) => void; 
  setClick: boolean;
  
};

const BoxWithNumber = ({ position, number, onClick, setClick }: BoxWithNumberProps) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [processing, setProcessing] = useState(false);
  const boxRef = useRef(null);

  const { scale } = useSpring({
    scale: hovered ? 1.2 : 1,
    config: { tension: 200, friction: 20 }
  });

  const handlePointerOver = () => {
    setHovered(true);
  };

  const handlePointerOut = () => {
    setHovered(false);
  };

  const handleBoxClick = () => {
    if (!clicked && !processing) {
      setProcessing(true);
      if(setClick) {
        setClicked(true);

      }
      
      onClick(number + 1);

      setTimeout(() => setProcessing(false), 100);
    }
  };


  return (
    <animated.mesh
      position={position}
      scale={scale}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleBoxClick}
      castShadow
      ref={boxRef}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={clicked ? "#F4CE14" : hovered ? "lightgray" : "white"}
      />
      <Text
        position={[0, 0, 0.6]}
        fontSize={0.5}
        color={clicked ? "#fff" : "#191919"}
        anchorX="center"
        anchorY="middle"
      >
        {number + 1}
      </Text>
    </animated.mesh>
  );
};

export default BoxWithNumber;
