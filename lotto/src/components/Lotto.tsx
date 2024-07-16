import { OrbitControls } from "@react-three/drei"
import { useMemo } from "react";
import * as THREE from 'three'

// stripe texture
const createStripeTexture = (color1: string, color2: string,  stripeWidth = 16) => {
    const size = 256; 
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext("2d");
    
    if (!context) {
        throw new Error("Failed to get 2D context");
      }

    for (let i = 0; i < size; i += stripeWidth * 2) {
      context.fillStyle = color1;
      context.fillRect(i, 0, stripeWidth, size);
      context.fillStyle = color2;
      context.fillRect(i + stripeWidth, 0, stripeWidth, size);
    }
  
    return new THREE.CanvasTexture(canvas);

}

const Lotto = () => {

    const stripeTexture = useMemo(() => createStripeTexture("#ff0000", "#ffffff", 8), []);

    
  return (
   
    <>
    <OrbitControls makeDefault/>
     
     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshBasicMaterial color = "#fff" />
      </mesh>

      <mesh position={[0, 5, -25]} receiveShadow castShadow>
        <boxGeometry args={[50, 15, 1]} />
        <meshBasicMaterial map = {stripeTexture} />
      </mesh>
    
      <mesh position={[0, 5, 25]} receiveShadow castShadow>
        <boxGeometry args={[50, 15, 1]} />
        <meshBasicMaterial  map = {stripeTexture}/>
      </mesh>
      
      <mesh position={[-25, 5, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow castShadow>
        <boxGeometry args={[50, 15, 1]} />
        <meshBasicMaterial map = {stripeTexture} />
      </mesh>
      
      <mesh position={[25, 5, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow castShadow>
        <boxGeometry args={[50, 15, 1]} />
        <meshBasicMaterial map = {stripeTexture}/>
      </mesh>

    
    </>
  )
}

export default Lotto
