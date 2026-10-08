/* =========================
   MOBILE NAVIGATION
========================= */

const menuButton = document.getElementById("menu-button");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav a");

menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
    );
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu");
    });
});

/* Close the menu if the screen becomes desktop-sized. */
window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu");
    }
});


/* =========================
   HEADER SCROLL EFFECT
========================= */

const header = document.getElementById("header");

function updateHeader() {
    header.classList.toggle("scrolled", window.scrollY > 20);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });
} else {
    /* Fallback for browsers without IntersectionObserver. */
    revealElements.forEach((element) => {
        element.classList.add("visible");
    });
}


/* =========================
   CURRENT YEAR
========================= */

const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}