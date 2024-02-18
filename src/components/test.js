import React, { Suspense } from "react";


import Model from "./modelRenders/Renderer";

import { Canvas } from "@react-three/fiber";
import { Point } from "@react-three/drei";
import { PointLight } from "three";



function Test() {

    return (
        <>
            <Canvas  gl={{ alpha: true, antialias: true, logarithmicDepthBuffer: true }} camera={{position: [0,10,10]}}>
                <Suspense fallback={null}>
                    <ambientLight intensity={10} />
                    <pointLight intensity={100} position={[0,0,0]}/>
                </Suspense>
                <Model url='models/smiley.gltf' />
            </Canvas>
        </>
    )
}

export default Test;
