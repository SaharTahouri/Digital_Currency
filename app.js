function showMenu() {
    let menu = document.getElementById("menu");
    if (menu.className === "header-menu") {
        menu.className += " show";
    } else {
        menu.className = "header-menu";
    }
}


function checkEmail(event) {
    event.preventDefault();
    const emailInput = document.querySelector(".subscribe-form-text");
    if (emailInput.validity.valid) {
        alert("Subscribed to News Letter!");
    } else {
        alert("Invalid email address!");
    }
}