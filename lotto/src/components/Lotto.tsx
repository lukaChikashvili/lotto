import { OrbitControls } from "@react-three/drei"
import { DoubleSide } from "three"
import { BoxWithNumber } from "./BoxNumber";



const Lotto = () => {
 // display 42 boxes
 let boxes = [];
 for(let i = 0; i < 42; i++) {
  const x = (i % 7) - 3;
  const y = Math.floor(i / 7) - 3;
  const position: [number, number, number] = [x * 1.5, y * 1.5, 0];
  boxes.push(<BoxWithNumber  key={i} position={position} number={i}/>)
 } 

    
  return (
     
    <>
    <OrbitControls makeDefault/>
     <mesh scale={4}  >
     {boxes}
      <meshStandardMaterial  side={DoubleSide} />
     </mesh>
 
    
    </>
  )
}

export default Lotto
