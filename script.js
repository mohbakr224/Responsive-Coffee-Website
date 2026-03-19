let close_button = document.querySelector(".close_button");
let nav_menu = document.querySelector(".nav_menu");
let toggle_button = document.querySelector(".toggle_button");

function toggleMenu() {
    document.body.classList.toggle("open");
}

toggle_button.addEventListener("click", toggleMenu);

close_button.addEventListener("click", toggleMenu);

// 3. Close menu when clicking outside (the dark overlay)
// We listen for clicks on the body, but ignore clicks inside the menu or toggle button
document.body.addEventListener("click", function(event) {
    if (document.body.classList.contains("open") && 
        !nav_menu.contains(event.target) && 
        !toggle_button.contains(event.target)) {
        
        document.body.classList.remove("open");
    }
});