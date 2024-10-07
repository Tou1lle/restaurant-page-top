// The main node which is used to append children on
const contentDiv = document.querySelector("#content");
// Header of Menu page
const h1Div = document.createElement("h1");
h1Div.textContent = "Menu";
h1Div.classList.add("menu-header");
// Menu list container
const menuListContainer = document.createElement("div");
menuListContainer.classList.add("menu-list-container");
// Menu Item will be objects where key = name of item and value = price
const sushiItems = {
    "Salmon Maki 12pcs": "20$",
    "Salmon Maki 8pcs": "15$",
    "Salmon Maki 4pxs": "10$",
    "Avokado Maki 12pcs": "25$",
    "Avokado Maki 8pcs": "20$",
    "Avokado Maki 4pcs": "15$",
}

const soupItems = {
    "Thai Soup": "17$",
    "Chinese Soup": "13$",
    "Pho": "20$",
    "Ramen": "25$",
    "Instant nudles": "1$",
}

const drinkItems = {
    "Coca Cola": "3$",
    "Fanta": "3$",
    "Vinea": "3$",
    "Tonic": "4$",
    "Sprite": "3$",
}

// Menu with certain sections
const menuSections = [
    "Sushi",
    "Soups",
    "Drinks",
];

// Functions for appending correct nodes
function appendToContent() {
    contentDiv.append(h1Div, menuListContainer);
}

/**
 * This function creates the menu sections that are in the menuSections array
 * The argument should be an array with section names
 * @param {Array} menuSections
 */
function appendSectionsToMenu(menuSections) {
    menuSections.forEach(createMenuSections);
}

/**
 * This functions creates an individual section with an header as the param
 * @param {String} sectionName 
 */
function createMenuSections(sectionName) {
    const h2Div = document.createElement("h2");
    h2Div.textContent = sectionName;

    const sectionDiv = document.createElement("section");
    sectionDiv.classList.add("menu-list");

    sectionDiv.appendChild(h2Div);
    menuListContainer.appendChild(sectionDiv);
}

/**
 * 
 * @returns NodeList of sections for future use of appending corresponding menu items
 */
function getMenuSections() {
    return menuListContainer.childNodes
}

function createMenuItems(menuItemObject) {
    const itemNodes = [];

    for (const key in menuItemObject) {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("menu-item");

        const h3Name = document.createElement("h3");
        const span = document.createElement("span");
        const h3Price = document.createElement("h3");

        h3Name.textContent = key;
        h3Price.textContent = menuItemObject[key];

        itemDiv.append(h3Name, span, h3Price);

        itemNodes.push(itemDiv);
    }

    return itemNodes;
}

function appendMenuItems() {
    const sectionsDiv = getMenuSections();

    sectionsDiv.forEach((node, index) => {
        switch (index) {
            case 0:
                const suhsiItemsArr = createMenuItems(sushiItems);
                suhsiItemsArr.forEach(item => node.appendChild(item));
                break;
            case 1:
                const soupItemsArr = createMenuItems(soupItems);
                soupItemsArr.forEach(item => node.appendChild(item));
                break;
            case 2:
                const drinkItemsArr = createMenuItems(drinkItems);
                drinkItemsArr.forEach(item => node.appendChild(item));
                break;
            default:
                console.log("Error");
        }
    });
}

function showMenuPage() {
    appendToContent();
    appendSectionsToMenu(menuSections);
    appendMenuItems();
}

function clearMenuPage() {
    menuListContainer.textContent = "";
}

export {showMenuPage, clearMenuPage};