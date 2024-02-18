import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import React, { useRef } from "react";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

function Model(props) {

    const gltf = useLoader(GLTFLoader, props.url);

    const meshRef = useRef();

    useFrame(() => {
        meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={meshRef}>
            <primitive object={gltf.scene} scale={2}/>
        </mesh>

    )

}

export default Model;