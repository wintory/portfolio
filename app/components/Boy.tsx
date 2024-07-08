'use client'

import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { FC, Suspense, useRef } from 'react'
import { Mesh } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const MeshComponent = () => {
  const fileUrl = './boy/scene.gltf'
  const mesh = useRef<Mesh>(null!)
  const gltf = useLoader(GLTFLoader, fileUrl)

  useFrame(() => {
    mesh.current.rotation.y += 0.001
  })

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  )
}

const BoyComponent: FC = () => {
  return (
    <div className="z-0 flex h-full w-full items-center justify-center">
      <Suspense fallback={null}>
        <Canvas className="h-2xl w-2xl">
          <OrbitControls />
          <ambientLight />
          <directionalLight />
          <Stage preset="rembrandt" intensity={1} environment="city">
            <MeshComponent />
          </Stage>
        </Canvas>
      </Suspense>
    </div>
  )
}

export default BoyComponent
