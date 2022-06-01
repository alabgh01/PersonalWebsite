/* jshint esversion: 8 */
/* jshint node: true */
/* jshint browser: true */
/* jshint jquery: true */
'use strict';

// function for closing and openinig navbar on small screen on click
function openCloseMenu(){
    let menuContent = document.querySelector(".dropdown-content");
    if (window.getComputedStyle(menuContent).display == "none"){
        menuContent.style.display = "block";
    }else if (window.getComputedStyle(menuContent).display == "block"){
        menuContent.style.display = "none";
    }
}