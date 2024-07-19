import { Canvas, } from '@react-three/fiber';
import Lotto from './components/Lotto';
import Lights from './components/Lights';
import { Physics } from '@react-three/rapier';
import { useRef, useState } from 'react';
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import * as THREE from 'three'
import CameraController from './components/CameraController';
import {  Video, VideoOff } from 'lucide-react';

function App() {
let controlsRef = useRef<OrbitControlsImpl | null>(null);
const [cameraDefault, setCameraDefault] = useState(false);

const [targetPosition, setTargetPosition] = useState(new THREE.Vector3(-7, 15, 40));
const [targetRotation, setTargetRotation] = useState(new THREE.Euler(0, 0, 0));
const [isDefault, setIsDefault] = useState(true);


  const moveCamera = () => {
    if (isDefault) {
      setTargetPosition(new THREE.Vector3(0, 40, 0)); 
      setTargetRotation(new THREE.Euler(-Math.PI / 2, 0, 1.56));
    } else {
      setTargetPosition(new THREE.Vector3(-7, 15, 40));
      setTargetRotation(new THREE.Euler(0, 0, 0)); 
    }
    setIsDefault(!isDefault);

    setCameraDefault(!cameraDefault);
  };





  return (
    <>
      <Canvas shadows camera={{ fov: 60, near: 0.1, far: 1000, position: [-7, 15, 40] }}>
        <Physics>
          <Lotto controlsRef={controlsRef} />
          <Lights />
          <CameraController targetPosition={targetPosition} targetRotation={targetRotation}/>
        </Physics>
      </Canvas>
<div className='container'>
  <button className='btn' onClick={moveCamera} >{cameraDefault ? <VideoOff /> : <Video />}{cameraDefault ? "ახლო ხედვა" : "შორს ხედვა"}</button>
  </div>
    </>
  )
}

export default App;
