import Modale from "./modale.js";

// Menu burger
const menuBurger = document.getElementById("burger");
const openBurgerButton = document.getElementById("openBurger");
const closeBurgerButton = document.getElementById("closeBurger");
new Modale(menuBurger, openBurgerButton, closeBurgerButton);

// Menu middle
const menuMiddle = document.getElementById("middle");
const openMiddleButton = document.getElementById("openMiddle");
const closeMiddleButton = document.getElementById("closeMiddle");
new Modale(menuMiddle, openMiddleButton, closeMiddleButton);

// Toast
const toast = document.getElementById("toast");
const toastModale = new Modale(toast);
setInterval(() => toastModale.toggle(), 1500);