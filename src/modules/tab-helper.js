function setCurrTab(tabName) {
    // Find the previous tab and hide it
    let prevTab = document.querySelector('.currTab');
    prevTab.classList.remove('currTab');
    prevTab.classList.add('hide');

    // Find the new tab and unhide it
    let newTab = document.getElementById(tabName);
    newTab.classList.remove('hide');
    newTab.classList.add('currTab');
    
    // Find the previous button and remove the "currTabBtn" attribute
    let prevBtnName = prevTab.id + 'Btn';
    let prevBtn = document.querySelector('.currTabBtn');
    prevBtn.classList.remove('currTabBtn');

    // Find the new button and add the "currTabBtn" attribute
    let newBtnName = tabName + 'Btn';
    let newBtn = document.getElementById(newBtnName);
    newBtn.classList.add('currTabBtn');
}

export default setCurrTab;