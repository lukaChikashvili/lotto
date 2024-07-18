import { Canvas } from '@react-three/fiber';
import Lotto from './components/Lotto';
import Lights from './components/Lights';
import { Physics } from '@react-three/rapier';


function App() {


  return (
    <>
      <Canvas shadows camera={{ fov: 60, near: 0.1, far: 1000, position: [-7, 10, 25] }}>
        <Physics>
          <Lotto />
          <Lights />
        
        </Physics>
      </Canvas>
    </>
  )
}

export default App;
