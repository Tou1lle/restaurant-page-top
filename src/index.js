import "./reset.css";
import "./styles.css";
import imageRestaurantLogo from "./assets/restaurant-logo.png";

console.log("Webpack Config Working!");

const imageContainerDiv = document.querySelector(".image-container");
const imgRestaurantLogo = document.createElement("img");
imgRestaurantLogo.src = imageRestaurantLogo;
imageContainerDiv.appendChild(imgRestaurantLogo);