import { Canvas } from '@react-three/fiber'
import Lotto from './components/Lotto'
import Lights from './components/Lights'

function App() {


  return (
    <>
      <Canvas shadows camera={{ position: [5, 5, 5], fov: 50 }}>
        <Lotto />
        <Lights />
      </Canvas>
    </>
  )
}

export default App
