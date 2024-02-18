import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import './styles/prompt.css';

import { createRoot } from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
function App() {

  return (
    <>

      <div className="landing">
      
        <div className="landing-content">
          <div>
            <h1>Hello </h1>
            <h1>there!</h1>
          </div>
          <h2 style={{padding: 10}}>Finding it hard to find something to watch? We got just the thing!</h2>
          <center><button className="landing-btn"><a href="/#prompt">Happy Prompting!</a></button></center>
          <img src='movie_grid.jpg' alt='movie' className='background-image'/>  
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="content">
        {/* <!--this is where my content should go--> */}
        <div class="prompt">
          <label htmlFor="prompt-text" class="prompt-text">
          </label>
          <textarea name="" id="prompt-text" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button class="prompt-submit" onclick="getKeys()">
            GET SUGGESTIONS
          </button>
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
