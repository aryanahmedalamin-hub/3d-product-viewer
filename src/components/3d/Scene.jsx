import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, Environment, ContactShadows, Float } from '@react-three/drei'
import Cake from './Cake'

export default function Scene() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
      <color attach="background" args={['#050505']} />
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow color="#DAA520" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#4B2512" />

      <Stage environment="city" intensity={0.6} contactShadow={false}>
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <Cake />
        </Float>
      </Stage>

      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.4}
        scale={10}
        blur={2}
        far={4.5}
      />

      <OrbitControls
        enablePan={false}
        minDistance={3}
        maxDistance={10}
        makeDefault
      />

      <Environment preset="night" />
    </Canvas>
  )
}
