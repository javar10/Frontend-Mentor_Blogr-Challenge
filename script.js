document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".dropdown-btn");
    const menu = document.querySelector(".dropdown-content");

    button.addEventListener("click", function (event) {
        event.stopPropagation();   // Prevent click from reaching document
        menu.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function () {
        menu.classList.remove("show");
    });
});

