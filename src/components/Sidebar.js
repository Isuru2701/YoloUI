import '../styles/sidebar.css';
import React from 'react';

function Sidebar() {
  return (
    <>
      <div class="side-parent">
        <div class="menu-option"><i class="fa-solid fa-house"></i><a href="prompt.html">Prompt</a></div>
        <div class="menu-option"><i class="fa-solid fa-star"></i><a href="preference.html">My Preference</a></div>
        <div class="menu-option"><i class="fa-solid fa-crown"></i><a href="checkout.html?t=premium">Get Premium</a></div>
        <div class="menu-option"><i class="fa-solid fa-palette"></i><a href="creator.html">Content Creator Portal</a></div>
        <div class="menu-option"><i class="fa-solid fa-code"></i><a href="developer.html">Developer Portal</a></div>
        <div class="menu-option"><i class="fa-solid fa-donate"></i><a href="https://ko-fi.com/E1E5UI8P9">Donate us</a></div>
      </div>

    </>
  );
}

export default Sidebar;