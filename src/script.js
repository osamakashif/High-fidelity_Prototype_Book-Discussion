// Authour: Osama Kashif
// JavaScript file for High Fidelity Prototyping

function pageUnavailable(pageName) {
    alert('The page \'' + pageName + '\' is not available.');
}

// For the Registration form
// Reference link: https://www.w3schools.com/howto/howto_css_modals.asp

function modalShow() {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("current-page").style.color = "#3B83BD";
    document.getElementById("current-page").style.fontWeight = "100"; // thin
    document.getElementById("trigger-modal").style.color = "#FF8C00";
    document.getElementById("trigger-modal").style.fontWeight = "700"; // bold
}

function modalClose() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("current-page").style.color = "#FF8C00";
    document.getElementById("current-page").style.fontWeight = "700"; // bold
    document.getElementById("trigger-modal").style.color = "#3B83BD";
    document.getElementById("trigger-modal").style.fontWeight = "100"; // thin
}

// Registration form stuff ends