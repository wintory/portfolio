'use client'

import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { FC, Suspense, useRef } from 'react'
import { Mesh } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const MeshComponent = () => {
  const fileUrl = './boy/scene.gltf'
  const mesh = useRef<Mesh>(null!)
  const gltf = useLoader(GLTFLoader, fileUrl)

  // useFrame(() => {
  //   mesh.current.rotation.y += 0.01
  // })

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  )
}

const BoyComponent: FC = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
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
