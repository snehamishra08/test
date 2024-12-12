document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector("nav ul");

    menuIcon.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
    });

    const orderButton = document.querySelector(".order-btn");
    orderButton.addEventListener("click", () => {
        alert("Order functionality is under development. Thank you for your interest!");
    });

    // Initialize the carousel
    carousel();
});

var myIndex = 0;

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; // Hide all slides
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1; // Reset to first slide
    }
    x[myIndex - 1].style.display = "block"; // Show the current slide
    setTimeout(carousel, 3000); // Change slide every 3 seconds
}
