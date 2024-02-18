import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import React, { useRef } from "react";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

function Scene() {

    const gltf = useLoader(GLTFLoader, '/models/smiley.gltf');
    return (
        <Canvas >
            <pointLight intensity={10}  />
            <mesh>
                <primitive object={gltf.scene} />
            </mesh>
        </Canvas>
    )

}

export default Scene;