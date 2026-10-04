function toggleMenu() {
    const menu = document.querySelector("nav ul");
    menu.classList.toggle("show-menu");
}

document.querySelectorAll("nav ul a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector("nav ul").classList.remove("show-menu");
    });
});

const footer = document.querySelector("footer");

if (footer) {
    footer.innerHTML = `<p>© ${new Date().getFullYear()} Nova. All rights reserved.</p>`;
}