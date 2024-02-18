import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import './styles/prompt.css';

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

          <center><a href="/#prompt">Express yourself to our AI chatbot to get suggestions!</a></center>
          <img src='movie_grid.jpg' alt='movie' className='background-image'/>  
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
