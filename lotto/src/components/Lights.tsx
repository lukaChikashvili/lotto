

const Lights = () => {
  return (
      <>
         <ambientLight intensity={0.5} />
         <directionalLight
        castShadow
        position={[5, 10, 5]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

<spotLight
        castShadow
        position={[10, 10, 10]}
        intensity={0.8}
        angle={0.2}
        penumbra={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

<pointLight
        castShadow
        position={[-10, 10, -10]}
        intensity={0.6}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      </>
  )
}

export default Lights
