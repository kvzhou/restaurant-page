function createAboutTab() {
    const aboutTab = document.createElement("div");
    aboutTab.classList.add("tabContent");
    aboutTab.classList.add("hide"); // Initially hidden
    aboutTab.setAttribute("id", "aboutTab");



    //////////////////////////////////////////////////////////// Location
    const locationSection = document.createElement("section");
    locationSection.classList.add("aboutTabSection");
    locationSection.setAttribute("id", "location");

    const locationHeading = document.createElement("h2");
    locationHeading.textContent = "Location";
    locationSection.appendChild(locationHeading);

    const locationParagraph = document.createElement("p");
    locationParagraph.textContent = "We're located at 8787 Complex Drive near the intersection of Complex Drive and Independence Boulevard.";
    locationSection.appendChild(locationParagraph);

    const mapImg = document.createElement("img");
    mapImg.setAttribute("id", "mapImg");
    mapImg.src = "img\map.jpg";
    mapImg.alt = "Map of restaurant";
    locationSection.appendChild(mapImg);

    aboutTab.appendChild(locationSection);



    //////////////////////////////////////////////////////////// Reviews
    const reviewsSection = document.createElement("section");
    reviewsSection.classList.add("aboutTabSection");
    reviewsSection.setAttribute("id", "reviews");

    const reviewsHeading = document.createElement("h2");
    reviewsHeading.textContent = "Reviews";
    reviewsSection.appendChild(reviewsHeading);

    const review1 = document.createElement("p");
    reviewsParagraph.textContent = "We're located at 8787 Complex Drive near the intersection of Complex Drive and Independence Boulevard.";
    reviewsSection.appendChild(review1);

    const review2 = document.createElement("p");
    reviewsParagraph.textContent = "We're located at 8787 Complex Drive near the intersection of Complex Drive and Independence Boulevard.";
    reviewsSection.appendChild(review2);

    const review3 = document.createElement("p");
    reviewsParagraph.textContent = "We're located at 8787 Complex Drive near the intersection of Complex Drive and Independence Boulevard.";
    reviewsSection.appendChild(review3);

    aboutTab.appendChild(reviewsSection);



    //////////////////////////////////////////////////////////// History
    const historySection = document.createElement("section");
    historySection.classList.add("aboutTabSection");
    historySection.setAttribute("id", "history");

    const historyHeading = document.createElement("h2");
    historyHeading.textContent = "History";
    historySection.appendChild(historyHeading);

    const historyParagraph = document.createElement("p");
    historyParagraph.textContent = "Wonderful World of Sushi was established in March 2016 by a pair of brothers named Edgar and Harrry Minato. The brothers had trained at the prestigious Japan Culinary Institute in Atami, Japan and wanted to use their newfound knowledge to create a restaurant that combined the best food with the best customer experience. When you visit Wonderful World of Sushi, you benefit from modern and traditional cooking techniques combined with first-class personal service.";
    historySection.appendChild(historyParagraph);

    aboutTab.appendChild(historySection);



    return aboutTab;
}

function loadAboutTab() {
    const main = document.getElementById("main");
    main.appendChild(createAboutTab());
}

export default loadAboutTab;