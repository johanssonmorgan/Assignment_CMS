document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("navToggle");
    const closeBtn = document.getElementById("closeNav");
    const menu = document.getElementById("mobileNav");
    if (!openBtn || !closeBtn || !menu) return;

    const openMenu = () => {
        // hide hamburger while open
        openBtn.classList.add("invisible");

        // show + fade in
        menu.classList.remove("hidden", "opacity-0");
        requestAnimationFrame(() => menu.classList.add("opacity-100"));

        document.body.classList.add("overflow-hidden");
        openBtn.setAttribute("aria-expanded", "true");
    };

    const closeMenu = () => {
        // fade out
        menu.classList.remove("opacity-100");
        menu.classList.add("opacity-0");

        // hide after transition completes
        const onEnd = (e) => {
            if (e.propertyName !== "opacity") return;
            menu.classList.add("hidden");
            menu.removeEventListener("transitionend", onEnd);
        };
        menu.addEventListener("transitionend", onEnd);

        document.body.classList.remove("overflow-hidden");
        openBtn.classList.remove("invisible");
        openBtn.setAttribute("aria-expanded", "false");
    };

    openBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);

    // Close when clicking any link inside the overlay
    menu.addEventListener("click", (e) => {
        if (e.target.closest("a")) closeMenu();
    });
});