'use client'

import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { FC, Suspense, useRef } from 'react'
import { Mesh } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const MeshComponent = () => {
  const fileUrl = './lowpoly_city/scene.gltf'
  const mesh = useRef<Mesh>(null!)
  const gltf = useLoader(GLTFLoader, fileUrl)

  useFrame(() => {
    // mesh.current.rotation.y += 0.001
    mesh.current.rotation.x += 0.01
  })

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  )
}

const Background: FC = () => {
  return (
    <div className="fixed justify-center items-center h-screen w-screen">
      <Suspense fallback={null}>
        <Canvas className="h-2xl w-2xl">
          <OrbitControls />
          <ambientLight />
          <directionalLight />
          <pointLight position={[10, 10, 10]} />
          <Stage preset="rembrandt" intensity={0.1} environment="apartment">
            <MeshComponent />
          </Stage>
        </Canvas>
      </Suspense>
    </div>
  )
}

export default Background
