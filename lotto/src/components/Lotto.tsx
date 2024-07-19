import { useContext, useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { DoubleSide } from "three";
import BoxWithNumber from "./BoxNumber";
import { UserContext } from "../context/UserContext";

const Lotto = ({ controlsRef }: { controlsRef: any }) => {
  const [clickedNumbers, setClickedNumbers] = useState<number[]>([]);
  const [setClick, setSetClick] = useState(true);

  // import from useContext
  const { setShowModal, showBoxes } = useContext(UserContext);

  const handleClick = (number: number) => {
    if (clickedNumbers.length < 6) {
      setClickedNumbers([...clickedNumbers, number]);
     
    }

    if(clickedNumbers.length >= 5) {
      setSetClick(false);
      setShowModal(true);

    }


  };

  useEffect(() => {
    const storedNumbers = localStorage.getItem("clickedNumbers");
    
    if (storedNumbers) {
      try {
        const parsedNumbers = JSON.parse(storedNumbers);
        
        if (Array.isArray(parsedNumbers) && parsedNumbers.every(num => typeof num === 'number')) {
          setClickedNumbers(parsedNumbers);
        }
      } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
        localStorage.removeItem("clickedNumbers");
      }
    }
  }, [])


  useEffect(() => {

    localStorage.setItem("clickedNumbers", JSON.stringify(clickedNumbers));

  }, [clickedNumbers, setClick]);

  // display 42 boxes
  let boxes = [];
  for (let i = 0; i < 42; i++) {
    const x = (i % 7) - 3;
    const y = Math.floor(i / 7) - 3;
    const position: [number, number, number] = [x * 1.5, y * 1.6, 0];
    boxes.push(
      <BoxWithNumber setClick = {setClick} onClick={handleClick} key={i} position={position} number={i} />
    );
  }

  return (
    <>
      <OrbitControls
        makeDefault
        maxAzimuthAngle={Math.PI / 4}
        minAzimuthAngle={-Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
        ref={controlsRef}
      />
      <mesh
        scale={4}
        position-y={1}
        position-z={-1}
        rotation={[Math.PI * -0.5, 0, 0]}
      >
        {showBoxes && boxes}
        <meshStandardMaterial side={DoubleSide} />
      </mesh>
    </>
  );
};

export default Lotto;
