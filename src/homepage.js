import restaurantLogoPath from "./assets/restaurant-logo.png";

const contentDiv = document.querySelector("#content");
const h1Text = "Touille's Sushi Restaurant";
const welcomeText = "Welcome to my fake Restaurant Page.";
const japaneseText1 = "いらっしゃいませ";
const japaneseText2 = "いただきます";
const japaneseText3 = "ビールを 三つ(みっつ) お願いします";

class HomePage {
    #hpContainer

    constructor() {
        this.#hpContainer = document.createElement("div");
        this.hpContainer.classList.add("restaurant-hp-container");
    }

    get hpContainer() {
        return this.#hpContainer;
    }

    createWelcomeDiv() {
        const welcomeDiv = document.createElement("div");
        welcomeDiv.classList.add("welcome-container");

        this.hpContainer.appendChild(welcomeDiv);
    }

    createWelcomeDivChildren() {
        const h1Div = document.createElement("h1");
        const welcomeMessage = document.createElement("p");
        const japanesePhrasesDiv = document.createElement("div");
        const japanesePhrase1 = document.createElement("p");
        const japanesePhrase2 = document.createElement("p");
        const japanesePhrase3 = document.createElement("p");
        japanesePhrasesDiv.classList.add("japanese-phrases");

        h1Div.textContent = h1Text;
        welcomeMessage.textContent = welcomeText;
        japanesePhrase1.textContent = japaneseText1;
        japanesePhrase2.textContent = japaneseText2;
        japanesePhrase3.textContent = japaneseText3;

        const welcomeDiv = document.querySelector(".welcome-container");

        welcomeDiv.append(h1Div, welcomeMessage, japanesePhrasesDiv);
        japanesePhrasesDiv.append(japanesePhrase1, japanesePhrase2, japanesePhrase3);
    }

    createImageDiv() {
        const imageContainer = document.createElement("div");
        const imageLogo = document.createElement("img");

        imageContainer.classList.add("image-container");
        imageLogo.src = restaurantLogoPath;

        imageContainer.appendChild(imageLogo);
        this.hpContainer.appendChild(imageContainer);
    }

    showHomePage() {
        if (this.hpContainer.childNodes.length !== 0) return;

        contentDiv.append(this.hpContainer);

        this.createWelcomeDiv();
        this.createImageDiv();
        this.createWelcomeDivChildren()
    }
}

export default HomePage;