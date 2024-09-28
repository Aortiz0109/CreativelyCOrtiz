// Current Copyright Year
document.getElementById("currentYear").innerHTML = (new Date().getFullYear());

// Mobile Nav menu
const mobileNavMenu = document.querySelector(".mobile-nav-links");
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
    mobileNavMenu.classList.toggle('hidden');
}

