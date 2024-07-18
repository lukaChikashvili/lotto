import { OrbitControls } from "@react-three/drei"
import { DoubleSide } from "three"
import { BoxWithNumber } from "./BoxNumber";




const Lotto = ({controlsRef}: {controlsRef: any}) => {
 // display 42 boxes
 let boxes = [];
 for(let i = 0; i < 42; i++) {
  const x = (i % 7) - 3;
  const y = Math.floor(i / 7) - 3;
  const position: [number, number, number] = [x * 1.5, y * 1.6, 0];
  boxes.push(<BoxWithNumber  key={i} position={position} number={i}/>)
 } 

    
  return (
     
    <>
    <OrbitControls
     makeDefault maxAzimuthAngle={Math.PI / 4}
     minAzimuthAngle={-Math.PI / 4}
     maxPolarAngle={Math.PI / 2}
     minPolarAngle={0}
     ref={controlsRef}
    />
     <mesh scale={4} position-y = {1} position-z = {-1}  rotation={[Math.PI * -0.5, 0, 0]}  >
     {boxes}
      <meshStandardMaterial  side={DoubleSide} />
     </mesh>
 
    
    </>
  )
}

export default Lotto
