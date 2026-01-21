import React, { useRef } from 'react'
import { useStore } from '../../store/useStore'
import { MeshPhysicalMaterial } from 'three'

export default function Cake() {
  const { cakeConfig } = useStore()
  const { layers, baseColor, frosting, topper, fillColor } = cakeConfig

  const materialProps = frosting === 'glossy' ? {
    // Glossy chocolate ganache
    roughness: 0.2,
    metalness: 0.1,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    sheen: 0.5,
    sheenColor: '#ffffff',
    reflectivity: 0.5,
  } : frosting === 'mirror' ? {
    // Mirror glaze reflections
    roughness: 0.02,
    metalness: 0.9,
    clearcoat: 1.0,
    clearcoatRoughness: 0.01,
    envMapIntensity: 2.5,
  } : {
    // Matte fondant with Sub-surface scattering
    roughness: 0.85,
    metalness: 0.0,
    transmission: 0.2,
    thickness: 1.5,
    attenuationColor: baseColor,
    attenuationDistance: 0.5,
    clearcoat: 0.1,
  }

  return (
    <group>
      {[...Array(layers)].map((_, i) => (
        <group key={i} position={[0, i * 0.6 - (layers * 0.3), 0]}>
          {/* Main Layer */}
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[1 - i * 0.1, 1 - i * 0.1, 0.5, 64]} />
            <meshPhysicalMaterial color={baseColor} {...materialProps} />
          </mesh>

          {/* Decorative Cream Piping on edges */}
          {[...Array(12)].map((_, j) => (
            <mesh
              key={j}
              position={[
                Math.cos((j / 12) * Math.PI * 2) * (1 - i * 0.1),
                0.25,
                Math.sin((j / 12) * Math.PI * 2) * (1 - i * 0.1)
              ]}
              castShadow
            >
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial color={fillColor} roughness={0.3} />
            </mesh>
          ))}

          {/* Filling/Cream between layers */}
          {i < layers - 1 && (
            <mesh position={[0, 0.3, 0]}>
              <cylinderGeometry args={[0.95 - i * 0.1, 0.95 - i * 0.1, 0.1, 64]} />
              <meshStandardMaterial color={fillColor} roughness={0.3} />
            </mesh>
          )}

          {/* Drip Effect for glossy/mirror finish on top layer */}
          {i === layers - 1 && frosting !== 'matte' && (
            <mesh position={[0, 0.26, 0]}>
              <cylinderGeometry args={[1.01 - i * 0.1, 1.01 - i * 0.1, 0.05, 64]} />
              <meshPhysicalMaterial color={baseColor} {...materialProps} />
            </mesh>
          )}
        </group>
      ))}

      {/* Topper */}
      {topper === 'heart' && (
        <mesh position={[0, layers * 0.3 + 0.2, 0]} castShadow>
          <torusGeometry args={[0.2, 0.05, 16, 32]} />
          <meshStandardMaterial color="gold" metalness={1} roughness={0.1} />
        </mesh>
      )}

      {topper === 'star' && (
        <mesh position={[0, layers * 0.3 + 0.2, 0]} castShadow>
          <octahedronGeometry args={[0.2, 0]} />
          <meshStandardMaterial color="gold" metalness={1} roughness={0.1} />
        </mesh>
      )}

      {/* Base/Tray */}
      <mesh position={[0, -layers * 0.3 - 0.3, 0]} receiveShadow>
        <cylinderGeometry args={[1.5, 1.6, 0.1, 64]} />
        <meshStandardMaterial color="#222" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  )
}
