import "./reset.css";
import "./styles.css";
import { loadHomeContent } from "./home.js";
import { loadMenuContent } from "./menu.js";
import { loadContactContent } from "./contact.js";



loadHomeContent();


const content = document.getElementById("content");
const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const contactBtn = document.querySelector("#contactBtn");

homeBtn.addEventListener("click", () => {
  content.innerHTML = ''; 

  homeBtn.classList.add('btnLight');
  menuBtn.classList.remove('btnLight');
  contactBtn.classList.remove('btnLight');
  loadHomeContent();
});
menuBtn.addEventListener("click", () => {
  content.innerHTML = ''; 

  menuBtn.classList.add('btnLight');
  homeBtn.classList.remove('btnLight');
  contactBtn.classList.remove('btnLight');
  loadMenuContent();
});
contactBtn.addEventListener("click", () => {
  content.innerHTML = ''; 

  contactBtn.classList.add('btnLight');
  homeBtn.classList.remove('btnLight');
  menuBtn.classList.remove('btnLight');
  loadContactContent();
});