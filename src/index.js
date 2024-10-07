import "./reset.css";
import "./styles.css";
import HomePage from "./homepage.js";
import { showMenuPage } from "./menu.js";

const contentDiv = document.querySelector("#content");
const homePage = new HomePage();

function clearPage() {
    contentDiv.textContent = "";
}

homePage.showHomePage();
showMenuPage()
//clearPage()