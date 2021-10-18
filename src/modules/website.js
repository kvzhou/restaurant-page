import setCurrTab from "./tab-helper.js";
import loadHomeTab from "./home-tab.js";
import loadMenuTab from "./menu-tab.js";
import loadAboutTab from "./about-tab.js"

function createHeader() {
    const header = document.createElement("header");

    const logoDiv = document.createElement("div");
    logoDiv.setAttribute("id","logDiv");
    header.appendChild(logoDiv);

    const logoImg = document.createElement("img");
    logoImg.setAttribute("src","img\logo.png");
    logoImg.setAttribute("alt","Sushi restaurant logo");
    logoDiv.appendChild(logoImg);
    
    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurantName");
    restaurantName.textContent = "Wonderful World of Sushi";
    header.appendChild(restaurantName);

    return header;
}

function createMain() {
    const main = document.createElement("main");
    main.setAttribute("id", "main"); // So can use "getElementById" function to find main
    return main;
}

function createTabBar() {
    const tabBar = document.createElement("div");

    const homeTabBtn = document.createElement("button");
    homeTabBtn.classList.add("tabLink");
    homeTabBtn.classList.add("currTabBtn"); // Home tab is initially active
    homeTabBtn.setAttribute("id", "homeTabBtn");
    homeTabBtn.textContent = "Home"
    homeTabBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("currTab")) return; // If the desired tab is already active, don't do anything
        loadHomeTab();// Not possible to append an html node twice. If you do so, it will only execute the last attempt, so this won't create a duplicate homeTab.
        setCurrTab("homeTab");
    });
    tabBar.appendChild(homeTabBtn);

    const menuTabBtn = document.createElement("button");
    menuTabBtn.classList.add("tabLink");
    menuTabBtn.setAttribute("id", "menuTabBtn");
    menuTabBtn.textContent = "menu"
    menuTabBtn.addEventListener("click", (e) => {
        loadMenuTab();
        setCurrTab("menuTab");
    });
    tabBar.appendChild(menuTabBtn);

    const aboutTabBtn = document.createElement("button");
    aboutTabBtn.classList.add("tabLink");
    aboutTabBtn.setAttribute("id", "aboutTabBtn");
    aboutTabBtn.textContent = "About"
    aboutTabBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("currTab")) return; // If the desired tab is already active, don't do anything
        loadAboutTab();
        setCurrTab("aboutTab");
    });
    tabBar.appendChild(aboutTabBtn);



    return tabBar;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const address = document.createElement("p");
    address.textContent = "8787 Complex Drive, Oceanview, California 81429";
    footer.appendChild(address);

    const phone = document.createElement("p");
    phone.textContent = "472-197-5409";
    footer.appendChild(phone);

    const bizHours = document.createElement("p");
    bizHours.textContent = "Open Mon-Thur 4pm-9pm, Fri-Sat 11am-10pm, Sun 11am-9pm";
    footer.appendChild(bizHours);

    return footer;
}

// Load home tab when website loads
function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    loadHome();
    setCurrTab("homeTab");
}

export default initializeWebsite;