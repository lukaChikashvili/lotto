import { useGLTF, useTexture } from "@react-three/drei"
import floor from '../assets/istockphoto-1204416934-612x612.jpg'
import jackpot from '../assets/news_sait.jpg'


const Balls: React.FC = () => {
  const floors = useTexture(floor);
  const jack = useTexture(jackpot);
  const model = useGLTF('./money.glb');

  return (
  <>
    <mesh scale={6} position-y = {10}>
        <sphereGeometry />
        <meshStandardMaterial color = "red" />
    </mesh>

    <mesh rotation={[-Math.PI / 2, 0, 0]} position-y = {-15} scale={5} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial map={floors} />
      </mesh>

      <primitive object={model.scene} scale = {2} position-y = {-9} position-z ={-70} position-x = {60} />

      <mesh position={[-60, 0, -60]} rotation={[0, 0.8, 0]}>
         <boxGeometry args = {[50, 30, 5]} />
         <meshStandardMaterial map={jack}/>
      </mesh>
  </>
  )
}

export default Balls
