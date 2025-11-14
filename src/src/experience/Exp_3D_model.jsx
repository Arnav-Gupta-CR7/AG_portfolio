import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, Html } from '@react-three/drei'
import { Suspense, useRef, useEffect } from 'react'

function Model({ pointer }) {
  const { scene } = useGLTF('/carpets.glb')
  const modelRef = useRef()

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += (pointer.current.x * 0.1 - modelRef.current.rotation.y) * 0.02
      modelRef.current.rotation.x += (pointer.current.y * 0.05 - modelRef.current.rotation.x) * 0.02
    }
  })

  return <primitive ref={modelRef} object={scene} scale={1} position={[0, 0, 0]} />
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" castShadow />
    </>
  )
}

function CameraRig() {
  return <perspectiveCamera makeDefault position={[11, 2, -35]} fov={50} />
}

export default function Exp_3D_model() {
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handlePointerMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      pointer.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  return (
    <Canvas
      shadows
      camera={{ position: [11, 2, -35], fov: 50 }}
      style={{ width: '100vw', height: '100vh', background: '#000000' }}
    >
      <Suspense fallback={<Html center></Html>}>
        <CameraRig />
        <Lights />
        <Model pointer={pointer} />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  )
}
