const contentDiv = document.querySelector("#content");

const aboutContainerDiv = document.createElement("div");
aboutContainerDiv.classList.add("about-container");

const headersAbout = [
    "About Us",
    "Location",
    "Contact",
]

const pAboutText = "This Restaurant Page was made as part of The Odin Project Curriculum. This page is dedicated to sushi. My favourite food is probably asian food, and sushi seems fun:)."
const pLocationText = "This fake Restaurant is located somewhere in Prague. Good luck finding us!";

const pAboutElement = document.createElement("p");
pAboutElement.textContent = pAboutText;
const pLocationElement = document.createElement("p");
pLocationElement.textContent = pLocationText;

function appendToContent() {
    contentDiv.appendChild(aboutContainerDiv);
}

function createCards(n) {
    for (let i = 0; i < n; i++) {
        const card = document.createElement("div");
        card.classList.add("about-card");
        aboutContainerDiv.appendChild(card);
    }
}

function addHeaders(headersArr) {
    const sectionsDivs = document.querySelectorAll(".about-card");

    sectionsDivs.forEach((section, index) => {
        const h1 = document.createElement("h1");
        h1.textContent = headersArr[index];
        section.appendChild(h1);
    });
}

function createList() {
    const uList = document.createElement("ul");
    const listEmail = document.createElement("li");
    const listGitHub = document.createElement("li");
    const aEmail = document.createElement("a");
    const aGitHub = document.createElement("a");
    const svgGithub = document.createElement("svg");
    const pathGitHub = document.createElement("path");

    aEmail.href = "mailto:hatuan@email.cz";
    aGitHub.href = "https://github.com/Tou1lle";
    aGitHub.target = "_blank";
    aGitHub.rel = "noopener noreferrer";

    uList.append(listEmail, listGitHub);
    listEmail.appendChild(aEmail);
    listGitHub.appendChild(aGitHub);
    
    aGitHub.textContent = "GitHub";
    aEmail.textContent = "hatuan@email.cz"

    return uList;
}

function showAboutPage() {
    contentDiv.appendChild(aboutContainerDiv);
    createCards(3);
    addHeaders(headersAbout);

    const sectionsDivs = document.querySelectorAll(".about-card");
    sectionsDivs.forEach((node, index) => {
        switch(index) {
            case 0:
                node.appendChild(pAboutElement);
                break;
            case 1:
                node.appendChild(pLocationElement);
                break;
            case 2:
                const uList = createList();
                node.appendChild(uList);
                break;
            default:
                console.log("ERROR");
        }
    });
}

function clearAboutPage() {
    aboutContainerDiv.textContent = "";
}

export {showAboutPage, clearAboutPage};