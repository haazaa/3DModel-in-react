/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, PresentationControls } from '@react-three/drei';

function Modal() {
  const { scene } = useGLTF('/bmw.glb');
  return <primitive object={scene} scale={0.01} />;
}

function BMWModel() {
  return (
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: 'absolute' }}>
      <color attach="background" args={['#010101']} />
      <PresentationControls speed={1.5} zoom={0.5} global>
        {/* <Stage> */}
        <Modal />
        {/* </Stage> */}
      </PresentationControls>
    </Canvas>
  );
}

export default BMWModel;
