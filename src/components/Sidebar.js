import '../styles/sidebar.css';
import React from 'react';

function Sidebar() {
  return (
    <>
    <div>
      <div className="sidebar">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>

    </>
  );
}

export default Sidebar;