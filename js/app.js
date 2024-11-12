// Navbar on the small screens
const nav_icon = document.getElementById("menu-btn");
const nav_links = document.querySelector(".nav-links");

nav_icon.addEventListener("click", (e) =>{
    nav_links.classList.toggle("hidden");
    e.stopPropagation();
})

// Hide navbar when clicking outside of it
document.addEventListener("click", (event) => {
    // Check if the click is outside the nav_icon and nav_links
    if (!nav_icon.contains(event.target) && !nav_links.contains(event.target)) {
        nav_links.classList.add("hidden");
    }
});