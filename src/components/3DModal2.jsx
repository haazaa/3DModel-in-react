/* eslint-disable react/no-unknown-property */
import { useRef, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

function Index() {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      (state.mouse.x * Math.PI * 2) / 20,
      0.05,
    );
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      (state.mouse.y * Math.PI * 1) / 5,
      0.01,
    );
  });
  const { nodes } = useGLTF('/bmw.glb');
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 50 }} shadows>
      <Suspense fallback={null}>
        <group ref={ref} position={[4, 6.8, -20]} scale={1} dispose={null}>
          <mesh
            geometry={nodes.Left_G_Inside.geometry}
            position={[-4.01, -2.36, 5.42]}
            scale={[1, 1, 1.54]}
          >
            <meshStandardMaterial color="#007A99" />
          </mesh>
        </group>
      </Suspense>
    </Canvas>
  );
}

// Export
export default Index;
