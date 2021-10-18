function createMenuTab() {
    const menuTab = document.createElement("div");
    menuTab.classList.add("tabContent");
    menuTab.classList.add("hide"); // Initially hidden
    menuTab.setAttribute("id", "menuTab");

    const menu = document.createElement("div");
    menu.classList.add("menu");



    //////////////////////////////////////////////////////////// Sushi
    const sushiMenuGroup = document.createElement("div");
    sushiMenuGroup.classList.add("menuGroup");

    const sushiHeading = document.createElement("h2");
    sushiHeading.textContent = "Sushi";
    sushiMenuGroup.appendChild(sushiHeading);

    createMenuItem(sushiMenuGroup, "Rainbow Roll", "$13", "Imitation crab, cucumber, avocado, salmon, tuna, shrimp, yellowtail");
    createMenuItem(sushiMenuGroup, "California Roll", "$13", "Imitation crab, cucumber, avocado");
    createMenuItem(sushiMenuGroup, "Spicy Tuna Roll", "$13", "Tuna, spicy mayo");
    createMenuItem(sushiMenuGroup, "Spider Roll", "$13", "Tempura soft-shell crab, cucumber, avocado, spicy mayo");
    createMenuItem(sushiMenuGroup, "Shrimp Tempura Roll", "$15", "Shrimp tempura, avocado, eel sauce");
    createMenuItem(sushiMenuGroup, "King Crab Roll", "$15", "Tempura soft-shell crab, cucumber, avocado, spicy mayo");
    createMenuItem(sushiMenuGroup, "Dragon Roll", "$15", "Eel, cucumber, crab sticks, eel sauce, avocado");
    createMenuItem(sushiMenuGroup, "Boston Roll", "$15", "Shrimp, cucumber, avocado");
    createMenuItem(sushiMenuGroup, "Alaska Roll", "$18", "Smoked salmon, cucumber, avocado, optional asparagus");
    createMenuItem(sushiMenuGroup, "Philly Roll", "$18", "Salmon, avocado, cream cheese");

    menu.appendChild(sushiMenuGroup);



    //////////////////////////////////////////////////////////// Salad    
    const saladMenuGroup = document.createElement("div");
    saladMenuGroup.classList.add("menuGroup");

    const saladHeading = document.createElement("h2");
    saladHeading.textContent = "Salad";
    saladMenuGroup.appendChild(saladHeading);

    createMenuItem(saladMenuGroup, "House Salad", "$8", "Mesclun greens, cherry tomato, carrot ginger vinaigrette");
    createMenuItem(saladMenuGroup, "Seaweed Salad", "$10", "Lotus, wakame, cucumber");
    createMenuItem(saladMenuGroup, "Broccolini Gomaae Salad", "$13", "Roasted sesame dressing, lemon");

    menu.appendChild(saladMenuGroup);



    //////////////////////////////////////////////////////////// Dessert
    const dessertMenuGroup = document.createElement("div");
    dessertMenuGroup.classList.add("menuGroup");

    const dessertHeading = document.createElement("h2");
    dessertHeading.textContent = "Dessert";
    dessertMenuGroup.appendChild(dessertHeading);

    createMenuItem(dessertMenuGroup, "Nama Chocolate", "$6", "Silky soft Japanese chocolate");
    createMenuItem(dessertMenuGroup, "Black Sesame Cheesecake", "$10", "Graham cracker crust, raspberry whipped cream");

    menu.appendChild(dessertMenuGroup);



    menuTab.appendChild(menu);

    return menuTab;
}

function createMenuItem(menuGroup, menuItemNameStr, menuItemPriceStr, menuItemDescriptionStr) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menuItem");

    const menuItemName = document.createElement("span");
    menuItemName.textContent = menuItemName;
    menuItem.appendChild(menuItemName);

    const menuItemPrice = document.createElement("span");
    menuItemPrice.textContent = menuItemPrice;
    menuItem.appendChild(menuItemPrice);

    const menuItemDescription = document.createElement("p");
    menuItemDescription.textContent = menuItemDescription;
    menuItem.appendChild(menuItemDescription);

    menuGroup.appendChild(menuItem);
}

function loadmenuTab() {
    const main = document.getElementById("main");
    main.appendChild(createMenuTab());
}

export default loadMenuTab;