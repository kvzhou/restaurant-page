function createHomeTab() {
    const homeTab = document.createElement("div");
    home.classList.add("tabContent");
    home.classList.add("currTab"); // Home tab is initially active
    homeTab.setAttribute("id", "homeTab");

    const mainImgDiv = document.createElement("div");
    mainImgDiv.classList.add("imgContainerWithHiddenItems");
    mainImgDiv.setAttribute("id", "mainImgDiv");

    const mainImg = document.createElement("img");
    mainImg.classList.add("imgWithHiddenItems");
    mainImg.src = "img\sushi-table.jpg";
    mainImg.alt = "3 sushi dishes on table";
    mainImgDiv.appendChild(mainImg);

    const mainImgHiddenItems = document.createElement("div");
    mainImgHiddenItems.classList.add("hiddenItemsDiv");
    mainImgHiddenItems.setAttribute("id", "mainImgHiddenItems");

    const mainImgText = document.createElement("div");
    mainImgText.classList.add("hiddenText");
    mainImgText.setAttribute("id", "mainImgText");
    mainImgText.textContent = "Classic and modern sushi dishes from elite chefs using the freshest ingredients";
    mainImgHiddenItems.appendChild(mainImgText);

    const mainImgBtn = document.createElement("div");
    mainImgBtn.classList.add("hiddenBtn");
    mainImgBtn.setAttribute("id", "mainImgBtn");
    mainImgBtn.textContent = "Menu";
    mainImgBtn.addEventListener("click", (e) => {
        setCurrTab("menuTab");
    });
    mainImgHiddenItems.appendChild(mainImgBtn);

    mainImgDiv.appendChild(mainImgHiddenItems);
    homeTab.appendChild(mainImgDiv);

    return homeTab;
}

function loadHomeTab() {
    const main = document.getElementById("main");
    main.appendChild(createHomeTab());
}

export default loadHomeTab;