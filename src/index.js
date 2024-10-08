import "./reset.css";
import "./styles.css";
import HomePage from "./homepage.js";
import { showMenuPage, clearMenuPage } from "./menu.js";
import { showAboutPage, clearAboutPage } from "./about.js";

const buttons = document.querySelectorAll("button");
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");
const contentDiv = document.querySelector("#content");

const homePage = new HomePage();

homePage.showHomePage();

function clearPage() {
    contentDiv.textContent = "";
}

buttons.forEach( button => {
    button.addEventListener("click", clearPage);
});

homeBtn.addEventListener("click", () => {
    const test = new HomePage();
    test.showHomePage();
});

menuBtn.addEventListener("click", () => {
    clearMenuPage();
    showMenuPage();
});

aboutBtn.addEventListener("click", () => {
    clearAboutPage();
    showAboutPage();
});