import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import './styles/prompt.css';

function App() {
  return (
    <>
      <div class="landing">
        <div class="landing-content">
          <h1>Hello there!</h1>
          <p>Get suggestions for your next movie, tv show, song, book or anime!</p>
          <button class="landing-btn" onclick="openNav()">Get Started</button>
        </div>
        <div>
          <canvas class="webgl">
            {/* <!--this is where the 3js obj loads--> */}
          </canvas>
        </div>
      </div>

      <div class="content">
        <div class="pop" onclick="openNav()"><i class='bx bxs-hand-right'></i></div>
        {/* <!--this is where my content should go--> */}
        <div class="prompt">
          <label for="prompt-text" class="prompt-text">
            Enter your Prompt here :
          </label>
          <textarea name="" id="prompt-text" cols="30" rows="10"></textarea>
        </div>
        <div>
          <select class="types" id="materialType">
            <option value="movie">Movie</option>
            <option value="tv">Tv series</option>
            <option value="song">songs</option>
            <option value="video">Youtube</option>
            <option value="books">Books</option>
            <option value="anime-movie">anime movies</option>
            <option value="anime-tv">anime shows</option>
          </select>
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
      <img src="assets/load.gif" alt="" class="load"/>
        <div class="overlay"></div>
      </>
      );
}

      export default App;
