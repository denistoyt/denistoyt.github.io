'use strict';

let menuIcons = document.querySelectorAll(".menu__icon");
let menuBody = document.querySelector(".menu__body");
let menuIcon;

for (let i = 0; i < menuIcons.length; i++) {
    menuIcon = menuIcons[i];
    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("active");
        if (menuBody.hasAttribute("hidden")) {
            menuBody.removeAttribute("hidden");
        }else {
            menuBody.setAttribute("hidden", "");
        }
    });
}
["resize", "DOMContentLoaded"].forEach( events => {
    window.addEventListener(events, () => {
        if (window.innerWidth < 1000) {
            menuBody.setAttribute("hidden", "");
        }else if (window.innerWidth >= 1000) {
            menuBody.removeAttribute("hidden");
        }
    });
});