/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stage, useGLTF } from '@react-three/drei';

function ModelLoader({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={0.01} />;
}

function Model() {
  const modelUrl = '/assets/bmw.glb';

  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 45 }} style={{ position: 'absolute' }}>
      <color attach="background" args={['#010101']} />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls enableZoom maxDistance={0.3} />
      <ambientLight intensity={1} />
      <ModelLoader url={modelUrl} />
    </Canvas>
  );
}

export default Model;
