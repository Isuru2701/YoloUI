import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import './styles/prompt.css';

import { createRoot } from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import { Loader, OrbitControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';

import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AmbientLight } from 'three';

function Model({ url }) {
  const gltf = useLoader(GLTFLoader, url)
  return (
    <primitive object={gltf.scene} scale={2}/>
  )
}

function App() {

  return (
    <>

      <div className="landing">

        <div className="landing-content">
          <div>
            <h1>Hello </h1>
            <h1>There!</h1>
          </div>
          <h2 style={{ padding: 10 }}>Finding it hard to find something to watch? We got just the thing!</h2>

          <center><a href="/#prompt">Express yourself to our AI chatbot to get suggestions!</a></center>
          <Canvas>
            <ambientLight intensity={10}/>
            <OrbitControls />
            <Model url="/models/smiley.gltf" />
          </Canvas>
        </div>
      </div>

      <div class="content">
        {/* <!--this is where my content should go--> */}
        <div class="prompt-content">
          <label htmlFor="prompt-text" class="prompt-text">
          </label>
          <textarea name="" id="prompt-text" cols="30" rows="10"></textarea>
        </div>
        <div>
          <center><button class="prompt-submit" onclick="getKeys()">
            GET SUGGESTIONS
          </button></center>
        </div>
        <div class="material">
          <div class="show-area ">
            {/* <!--this is where all the suggestions get listed--> */}
          </div>
        </div>
      </div>
      <img src="assets/load.gif" alt="" class="load" />
      <div class="overlay"></div>
    </>
  );

}

export default App;
